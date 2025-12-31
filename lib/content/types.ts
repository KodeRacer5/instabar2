// ============================================================
// TITAN SURGICAL CONTENT TYPE DEFINITIONS
// ============================================================

// Base interface for all content types
export interface BaseContent {
  slug: string;
  title: string;
  meta_description: string;
  primary_keyword: string;
  published: boolean;
  faq: FAQItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  content: string;
  substeps?: string[];
  warning?: string;
  tip?: string;
}

export interface TroubleshootingItem {
  issue: string;
  cause: string;
  solution: string;
}

export interface AccuracyData {
  angular_deviation: string;
  apical_deviation: string;
  coronal_deviation?: string;
  depth_deviation?: string;
  source: string;
}

// ============================================================
// SURGICAL GUIDES
// ============================================================
export interface SurgicalGuide extends BaseContent {
  template: 'protocol';
  guide_type: 'tooth-supported' | 'tissue-supported' | 'bone-supported' | 'mucosa-supported' | 'stackable';
  implant_system?: string;
  manufacturer?: string;
  compatible_sleeves?: string[];
  drill_sequence?: string[];
  planning_software: string[];
  indications: string[];
  contraindications: string[];
  clinical_steps: Step[];
  prerequisites: string[];
  accuracy_data?: AccuracyData;
  troubleshooting: TroubleshootingItem[];
  specs: Record<string, string>;
  related_guides: string[];
  time_estimate?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

// ============================================================
// IMPLANT SYSTEMS
// ============================================================
export interface ImplantSystem extends BaseContent {
  template: 'product';
  manufacturer: string;
  connection_type: string;
  platform_options: string[];
  diameter_range: string;
  length_range: string;
  material: string;
  surface: string;
  surgical_kit: string;
  guided_surgery_compatible: boolean;
  sleeve_system: string;
  planning_software_support: string[];
  verification_method: 'online_tool' | 'documentation_only' | 'none';
  verification_url?: string;
  indications: string[];
  contraindications: string[];
  specs: Record<string, string>;
  related_systems: string[];
}

// ============================================================
// PROSTHESIS TYPES
// ============================================================
export interface ProsthesisType extends BaseContent {
  template: 'product';
  category: 'fixed' | 'removable' | 'hybrid';
  material: string;
  material_brands: string[];
  framework_type: string;
  retention_method: 'screw-retained' | 'cement-retained' | 'combination';
  implant_requirements: {
    min_implants: number;
    recommended: number;
    max_cantilever: string;
  };
  indications: string[];
  contraindications: string[];
  material_specs: Record<string, string>;
  pros: string[];
  cons: string[];
  lifespan: string;
  price_range: '$' | '$$' | '$$$' | '$$$$';
  related_types: string[];
}

// ============================================================
// IMPLANT CONFIGURATIONS
// ============================================================
export interface ImplantConfiguration extends BaseContent {
  template: 'protocol';
  arch: 'maxilla' | 'mandible' | 'both';
  implant_count: number;
  tilted_implants: boolean;
  tilt_angle?: string;
  ap_spread_requirement: string;
  cantilever_guidelines: {
    max_length: string;
    recommended: string;
    calculation: string;
  };
  bone_requirements: {
    min_height: string;
    min_width: string;
    density?: string;
  };
  prosthesis_options: string[];
  immediate_load_criteria: {
    min_torque: string;
    min_isq: number;
    bone_quality: string;
  };
  success_rate: string;
  contraindications: string[];
  clinical_steps: Step[];
  related_configs: string[];
}

// ============================================================
// TROUBLESHOOTING
// ============================================================
export interface TroubleshootingGuide extends BaseContent {
  template: 'troubleshoot';
  category: 'surgical-guide' | 'full-arch' | 'implant' | 'prosthetic' | 'software';
  subcategory: string;
  symptoms: string[];
  causes: Array<{
    cause: string;
    likelihood: 'common' | 'occasional' | 'rare';
    solution: string;
  }>;
  prevention: string[];
  when_to_refer: string[];
  related_issues: string[];
}

// ============================================================
// COMPARISONS
// ============================================================
export interface Comparison extends BaseContent {
  template: 'compare';
  category: 'materials' | 'systems' | 'software' | 'techniques' | 'configurations';
  item_a: {
    name: string;
    slug: string;
  };
  item_b: {
    name: string;
    slug: string;
  };
  criteria: Array<{
    criterion: string;
    item_a_value: string;
    item_b_value: string;
    winner: 'a' | 'b' | 'tie';
  }>;
  summary: {
    choose_a_if: string[];
    choose_b_if: string[];
  };
  verdict: string;
  related_comparisons: string[];
}

// ============================================================
// SOFTWARE WORKFLOWS
// ============================================================
export interface SoftwareWorkflow extends BaseContent {
  template: 'workflow';
  software: string;
  module?: string;
  application: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  time_estimate: string;
  prerequisites: string[];
  steps: Step[];
  keyboard_shortcuts?: Array<{
    shortcut: string;
    action: string;
  }>;
  common_errors: Array<{
    error: string;
    solution: string;
  }>;
  output_files: string[];
  next_steps: string[];
  related_workflows: string[];
}

// ============================================================
// VERIFICATION GUIDES
// ============================================================
export interface VerificationGuide extends BaseContent {
  template: 'protocol';
  manufacturer: string;
  verification_method: 'online_tool' | 'phone' | 'documentation' | 'none';
  verification_url?: string;
  verification_phone?: string;
  required_info: string[];
  where_to_find: Array<{
    info: string;
    location: string;
  }>;
  step_by_step: Step[];
  what_verification_confirms: string[];
  limitations: string[];
  if_verification_fails: string[];
  documentation_requirements: string[];
  fda_gudid_compatible: boolean;
  related_guides: string[];
}

// ============================================================
// TECHNICAL SPECS
// ============================================================
export interface TechnicalSpec extends BaseContent {
  template: 'product';
  category: string;
  specs_table: Array<Record<string, string>>;
  explanation: string;
  clinical_relevance: string;
  selection_criteria: string[];
  related_specs: string[];
}

// ============================================================
// PATIENT RESOURCES
// ============================================================
export interface PatientResource extends BaseContent {
  template: 'product';
  reading_level: 'simple' | 'intermediate';
  topic: string;
  content_sections: Array<{
    heading: string;
    content: string;
  }>;
  key_takeaways: string[];
  questions_to_ask_dentist: string[];
  related_resources: string[];
}

// ============================================================
// CONTENT TYPE UNION
// ============================================================
export type ContentItem =
  | SurgicalGuide
  | ImplantSystem
  | ProsthesisType
  | ImplantConfiguration
  | TroubleshootingGuide
  | Comparison
  | SoftwareWorkflow
  | VerificationGuide
  | TechnicalSpec
  | PatientResource;
