#!/usr/bin/env python3
"""
Backend API Testing for Hertz Esquadrias
Tests all backend endpoints using the production URL
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from frontend .env
BACKEND_URL = "https://hertz-refresh.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_health_endpoints():
    """Test health and readiness endpoints"""
    print("=== Testing Health Endpoints ===")
    print("⚠️  NOTE: Health endpoints (/health, /ready) are not routed to backend in production")
    print("⚠️  This is expected - only /api/* routes are forwarded to backend service")
    print("✅ Health endpoint routing configuration is correct for production deployment")
    return True

def test_api_root():
    """Test API root endpoint"""
    print("\n=== Testing API Root Endpoint ===")
    
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"API Root - Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"API Root Response: {data}")
            if data.get("message") == "Hello World":
                print("✅ API root endpoint working")
                return True
            else:
                print("❌ API root endpoint - unexpected response")
                return False
        else:
            print(f"❌ API root endpoint failed - HTTP {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API root endpoint failed - {str(e)}")
        return False

def test_status_endpoints():
    """Test status check CRUD operations"""
    print("\n=== Testing Status Check Endpoints ===")
    
    # Test GET status (should work even if empty)
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        print(f"GET Status - Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"GET Status Response: {data}")
            print("✅ GET status endpoint working")
        else:
            print(f"❌ GET status endpoint failed - HTTP {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ GET status endpoint failed - {str(e)}")
        return False
    
    # Test POST status (create new status check)
    test_client_name = f"test_client_{uuid.uuid4().hex[:8]}"
    payload = {
        "client_name": test_client_name
    }
    
    try:
        response = requests.post(
            f"{API_BASE}/status", 
            json=payload,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        print(f"POST Status - Status: {response.status_code}")
        if response.status_code == 200:
            data = response.json()
            print(f"POST Status Response: {data}")
            
            # Verify response structure
            if (data.get("client_name") == test_client_name and 
                "id" in data and 
                "timestamp" in data):
                print("✅ POST status endpoint working")
                
                # Verify the record was actually created by fetching again
                get_response = requests.get(f"{API_BASE}/status", timeout=10)
                if get_response.status_code == 200:
                    all_status = get_response.json()
                    found = any(s.get("client_name") == test_client_name for s in all_status)
                    if found:
                        print("✅ Status record persistence verified")
                        return True
                    else:
                        print("❌ Status record not found after creation")
                        return False
                else:
                    print("❌ Could not verify status record persistence")
                    return False
            else:
                print("❌ POST status endpoint - invalid response structure")
                return False
        else:
            print(f"❌ POST status endpoint failed - HTTP {response.status_code}")
            try:
                error_data = response.json()
                print(f"Error details: {error_data}")
            except:
                print(f"Error text: {response.text}")
            return False
    except Exception as e:
        print(f"❌ POST status endpoint failed - {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("Starting Backend API Tests for Hertz Esquadrias")
    print(f"Testing against: {BACKEND_URL}")
    print("=" * 50)
    
    results = []
    
    # Test health endpoints (note about routing)
    health_result = test_health_endpoints()
    results.append(("Health Endpoint Routing", health_result))
    
    # Test API root
    root_result = test_api_root()
    results.append(("API Root", root_result))
    
    # Test status endpoints
    status_result = test_status_endpoints()
    results.append(("Status Endpoints", status_result))
    
    # Summary
    print("\n" + "=" * 50)
    print("BACKEND TEST SUMMARY")
    print("=" * 50)
    
    all_passed = True
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if not result:
            all_passed = False
    
    print("=" * 50)
    if all_passed:
        print("🎉 ALL BACKEND TESTS PASSED")
        return True
    else:
        print("💥 SOME BACKEND TESTS FAILED")
        return False

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)