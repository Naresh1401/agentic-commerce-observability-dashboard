import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import ProjectIndex from './pages/ProjectIndex';
import ApiPlayground from './pages/ApiPlayground';
import AgentChat from './pages/AgentChat';
import UcpFlow from './pages/UcpFlow';
import PaymentSafety from './pages/PaymentSafety';
import PartnerIntegrations from './pages/PartnerIntegrations';
import RagAssistant from './pages/RagAssistant';
import SecurityDemo from './pages/SecurityDemo';
import TestingDashboard from './pages/TestingDashboard';
import ObservabilityDashboard from './pages/ObservabilityDashboard';
import Architecture from './pages/Architecture';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectIndex />} />
        <Route path="/api-playground" element={<ApiPlayground />} />
        <Route path="/agent-chat" element={<AgentChat />} />
        <Route path="/ucp-flow" element={<UcpFlow />} />
        <Route path="/payment-safety" element={<PaymentSafety />} />
        <Route path="/partner-integrations" element={<PartnerIntegrations />} />
        <Route path="/rag-assistant" element={<RagAssistant />} />
        <Route path="/security-demo" element={<SecurityDemo />} />
        <Route path="/testing-dashboard" element={<TestingDashboard />} />
        <Route path="/observability" element={<ObservabilityDashboard />} />
        <Route path="/architecture" element={<Architecture />} />
      </Route>
    </Routes>
  );
}
