from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app, raise_server_exceptions=False)

def test_metrics_endpoint_shape():
    payload = client.get('/metrics').json()
    assert 'request_count' in payload
    assert 'tool_call_success_rate' in payload

