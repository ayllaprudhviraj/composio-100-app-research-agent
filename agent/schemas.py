"""Pydantic schemas enforcing strict research data contracts and grounding."""
from typing import List, Optional
from enum import Enum
from pydantic import BaseModel, Field

class AuthenticationType(str, Enum):
    OAUTH2 = "OAuth2"
    API_KEY = "API key"
    BASIC_AUTH = "Basic authentication"
    PAT = "Personal access token"
    JWT_BEARER = "JWT or bearer token"
    OTHER = "Other"
    UNKNOWN = "Unknown"

class DeveloperAccess(str, Enum):
    SELF_SERVE_FREE = "Self-serve free"
    SELF_SERVE_TRIAL = "Self-serve trial"
    PAID_PLAN_DEPENDENT = "Paid-plan dependent"
    ADMIN_APPROVAL_REQUIRED = "Admin approval required"
    PARTNER_CONTACT_SALES_GATED = "Partner/contact-sales gated"
    UNKNOWN = "Unknown"

class ApiType(str, Enum):
    REST = "REST"
    GRAPHQL = "GraphQL"
    SOAP = "SOAP"
    GRPC = "gRPC"
    SDK = "SDK"
    WEBHOOKS = "Webhooks"
    OTHER = "Other"
    UNKNOWN = "Unknown"

class ApiBreadth(str, Enum):
    BROAD = "broad"
    MODERATE = "moderate"
    NARROW = "narrow"
    UNKNOWN = "unknown"

class McpStatus(str, Enum):
    OFFICIAL_MCP = "Official MCP"
    THIRD_PARTY_MCP = "Third-party MCP"
    COMMUNITY_MCP = "Community MCP"
    NO_VERIFIED_MCP_FOUND = "No verified MCP found"
    UNKNOWN = "Unknown"

class Buildability(str, Enum):
    EASY = "Easy"
    MEDIUM = "Medium"
    DIFFICULT = "Difficult"
    NOT_CURRENTLY_BUILDABLE = "Not currently buildable"
    INSUFFICIENT_EVIDENCE = "Insufficient evidence"

class BlockerType(str, Enum):
    AUTHENTICATION_COMPLEXITY = "Authentication complexity"
    RESTRICTED_API_SCOPES = "Restricted API scopes"
    PAID_ACCESS = "Paid access"
    PARTNER_ACCESS = "Partner access"
    RATE_LIMITS = "Rate limits"
    WEAK_DOCUMENTATION = "Weak documentation"
    NO_PUBLIC_API = "No public API"
    TECHNICAL_LIMITATIONS = "Technical limitations"

class ConfidenceLevel(str, Enum):
    HIGH = "High"
    MEDIUM = "Medium"
    LOW = "Low"
    UNKNOWN = "Unknown"

class EvidenceItem(BaseModel):
    source_url: str = Field(description="Exact URL of the source page")
    source_title: str = Field(description="Title or heading of the source page")
    claim_supported: str = Field(description="Specific finding or fact this evidence supports")
    source_type: str = Field(description="E.g., Official Docs, API Reference, Pricing Page, GitHub Repo")
    retrieved_timestamp: str = Field(description="ISO timestamp when retrieved")

class AppIdentity(BaseModel):
    name: str
    category: str
    one_line_description: str = Field(description="Concise, factual synopsis grounded in source data")

class AuthenticationFinding(BaseModel):
    auth_methods: List[AuthenticationType]
    details: Optional[str] = None
    confidence: ConfidenceLevel = ConfidenceLevel.MEDIUM

class DeveloperAccessFinding(BaseModel):
    access_tier: DeveloperAccess
    details: Optional[str] = Field(description="Evidence-based reasoning for self-serve vs. gated status")
    confidence: ConfidenceLevel = ConfidenceLevel.MEDIUM

class ApiSurfaceFinding(BaseModel):
    has_public_api: bool
    api_types: List[ApiType]
    api_breadth: ApiBreadth
    has_webhooks: bool
    has_official_sdk: bool
    details: Optional[str] = None
    confidence: ConfidenceLevel = ConfidenceLevel.MEDIUM

class McpFinding(BaseModel):
    mcp_status: McpStatus
    repository_url: Optional[str] = None
    maintainer: Optional[str] = None
    details: Optional[str] = None
    confidence: ConfidenceLevel = ConfidenceLevel.MEDIUM

class BuildabilityFinding(BaseModel):
    rating: Buildability
    blockers: List[BlockerType] = []
    justification: str = Field(description="Explanation of buildability rating based on findings")
    confidence: ConfidenceLevel = ConfidenceLevel.MEDIUM

class AppResearchResult(BaseModel):
    id: int
    identity: AppIdentity
    authentication: AuthenticationFinding
    developer_access: DeveloperAccessFinding
    api_surface: ApiSurfaceFinding
    mcp: McpFinding
    buildability: BuildabilityFinding
    evidence: List[EvidenceItem] = Field(description="Audit trail of verified sources supporting the findings")
    research_status: str = "completed"
    error_message: Optional[str] = None

