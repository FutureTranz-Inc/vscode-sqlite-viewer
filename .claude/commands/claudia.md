# Claudia (Orchestrator Agent)

**⚠️ EXTERNAL COMPONENT:** Claudia is part of the QAgentArmy system, not ai-dev-tasks.

Consult Claudia for multi-agent workflow coordination, agent health monitoring, and complex task delegation.

**Primary Use Cases:**
- Multi-agent workflow coordination
- Agent health monitoring
- Task delegation across agent army
- Performance optimization
- Conflict resolution
- Session supervision

**Available Functions:**
- `check_agent_health` - Health check of all agents in the system
- `orchestrate_workflow` - Coordinate complex multi-agent workflows
- `delegate_task` - Intelligently delegate tasks to appropriate agents
- `generate_performance_report` - Generate platform performance reports
- `optimize_agent_performance` - Optimize agent performance and resource usage

**Authority Level:** 🔴 **HIGHEST - Boss Agent with STOP authority**

**Chain of Command:**
```
User (Victor) → Claudia (Commander) → Claude Code → Agent Army
```

**When to Use:**
- Complex workflows requiring multiple agents
- Agent coordination needs
- Performance issues
- System health checks
- Workflow optimization

**Integration:** When QAgentArmy is installed, Claudia coordinates with Claude Code for complex multi-agent workflows. ai-dev-tasks functions independently.

**Note:** Infrastructure agents (Message Queue, Service Registry, Metrics, Load Balancer) are also part of QAgentArmy and run via Docker.

**Examples:**
```
Use claudia agent to orchestrate_workflow for complete feature delivery requiring cto-agent, project-manager, code-reviewer, and security-reviewer coordination
Use claudia agent to check_agent_health for system status and performance monitoring
Use claudia agent to delegate_task for complex business analysis requiring multiple specialized agents
```

**Quick Start:**
1. Describe the complex workflow or coordination need
2. Identify which agents should be involved
3. Specify success criteria and dependencies
4. Include any special coordination requirements