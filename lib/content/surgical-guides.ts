import type { SurgicalGuide } from './types';
}
  );
,
  // ============================================
  // GUIDE TYPES & FABRICATION - Added Dec 30, 2024
  // ============================================

  {
    slug: 'types-of-surgical-guides',
    title: 'Types of Surgical Guides: Tooth, Tissue, and Bone-Supported',
    primary_keyword: 'types of surgical guides',
    meta_description: 'Complete guide to tooth-supported, tissue-supported, and bone-supported surgical guides. Selection criteria, accuracy data, and clinical applications.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Partially edentulous with stable teeth', 'Fully edentulous', 'Full-arch with bone reduction'],
    contraindications: ['Insufficient stable teeth for tooth-supported', 'Poor tissue quality for mucosa-supported'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '<2mm', apical_deviation: '<2mm', angular_deviation: '<5-8°', source: 'Systematic reviews' },
    troubleshooting: [],
    specs: { 'Tooth-Supported': 'Highest accuracy', 'Tissue-Supported': 'Edentulous patients', 'Bone-Supported': 'After flap elevation', 'Min Stable Teeth': '3 for tooth-supported', 'Fixation Pins': '3-4 for full arch' },
    related_guides: ['stackable-surgical-guides', 'surgical-guide-accuracy-factors'],
    faq: [{ question: 'Which guide type is most accurate?', answer: 'Tooth-supported guides offer highest accuracy by utilizing stable remaining teeth as landmarks.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'stackable-surgical-guides',
    title: 'Stackable Surgical Guides for Full-Arch Rehabilitation',
    primary_keyword: 'stackable surgical guides',
    meta_description: 'Multi-component stackable guide systems for full-arch implant rehabilitation. Bone reduction, osteotomy, and prosthesis delivery with single registration.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Full-arch immediate rehabilitation', 'Teeth-in-a-day', 'Terminal dentition', 'Edentulous patients'],
    contraindications: ['Limited mouth opening', 'Inadequate bone for anchor pins'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '0.44-1.43mm', apical_deviation: '0.44-1.43mm', angular_deviation: '2.4-4.14°', source: 'Clinical studies' },
    troubleshooting: [],
    specs: { 'Anchor Pins': '3-4 pins (1.3-2.0mm diameter)', 'Base Guide Height': '5mm average', 'Min Cross-Section': '3mm', 'Bone Reduction Target': '13-15mm from occlusal', 'Spacer in Sleeves': '200 micron' },
    related_guides: ['types-of-surgical-guides', 'immediate-load-full-arch-planning', 'full-arch-implant-treatment-planning'],
    faq: [{ question: 'What is the accuracy of stackable guides?', answer: 'Bone reduction deviations of 0.02-1.98mm and implant placement accuracy of 0.44-1.43mm at apex with 2.4-4.14° angular deviation.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'surgical-guide-accuracy-factors',
    title: 'Surgical Guide Accuracy: Factors Affecting Precision',
    primary_keyword: 'surgical guide accuracy',
    meta_description: 'Factors affecting surgical guide accuracy. CBCT registration, sleeve distance, guide stability, and manufacturing parameters for optimal implant placement.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Quality improvement', 'Understanding deviation sources', 'Protocol optimization'],
    contraindications: [],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '0.39-2.05mm', apical_deviation: '0.28-2.28mm', angular_deviation: '2.5-5.6°', source: 'Systematic reviews by guide type' },
    troubleshooting: [],
    specs: { 'Safety Margin': '2mm minimum from vital structures', 'Sleeve-Drill Tolerance': '0.2-0.3mm gap', 'SLA vs DLP': 'SLA slightly more accurate', 'Professional Printer RMS': '0.09±0.01mm', 'Consumer DLP RMS': '0.25±0.05mm', 'Min Fixation Pins (Tooth)': '2', 'Min Fixation Pins (Mucosa)': '3' },
    related_guides: ['types-of-surgical-guides', 'cbct-requirements-surgical-guide-planning'],
    faq: [{ question: 'What causes the most accuracy errors?', answer: 'Poor CBCT/STL registration is the most critical error as it propagates through entire workflow and is irreversible.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'files-for-surgical-guide-fabrication',
    title: 'Files Required for Surgical Guide Fabrication',
    primary_keyword: 'surgical guide fabrication files',
    meta_description: 'Complete list of files needed for surgical guide fabrication. STL requirements, DICOM export, drilling protocols, and quality control documentation.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Guide fabrication submission', 'Lab communication', 'Quality control'],
    contraindications: [],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: 'N/A', apical_deviation: 'N/A', angular_deviation: 'N/A', source: 'Manufacturing specifications' },
    troubleshooting: [],
    specs: { 'STL Chordal Tolerance': '0.01mm', 'Min Wall Thickness': '2.0mm', 'Tooth Offset': '0.00-0.07mm', 'Sleeve Offset': '0.00-0.04mm', 'File Size': '10-50MB typical' },
    related_guides: ['cbct-export-for-surgical-guides', 'cbct-requirements-surgical-guide-planning'],
    faq: [{ question: 'What files are needed for guide fabrication?', answer: 'STL of guide design, DICOM from CBCT, intraoral scan STLs, drilling protocol PDF, implant position report, and QC screenshots.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'cbct-export-for-surgical-guides',
    title: 'CBCT Export Settings for Surgical Guide Planning',
    primary_keyword: 'CBCT export surgical guide',
    meta_description: 'Optimal CBCT export settings for surgical guide fabrication. DICOM format, voxel size, field of view, and export parameters for planning software.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['CBCT data preparation', 'Planning software import', 'Guide fabrication workflow'],
    contraindications: [],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '0.82-1.37mm', apical_deviation: '1.19-1.77mm', angular_deviation: 'Per protocol', source: 'Clinical studies' },
    troubleshooting: [],
    specs: { 'Voxel Size': '0.2-0.5mm (0.3-0.4mm optimal)', 'Format': 'DICOM III uncompressed', 'Resolution': '512x512 minimum', 'FOV Maxilla': '8-12cm', 'FOV Mandible': '9-14cm', 'kV': '110-130', 'mA': '20-120' },
    related_guides: ['cbct-requirements-surgical-guide-planning', 'dual-scan-protocol', 'files-for-surgical-guide-fabrication'],
    faq: [{ question: 'What voxel size for CBCT export?', answer: '0.3-0.4mm is optimal. Smaller creates excessive files, larger reduces accuracy.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'dual-scan-protocol',
    title: 'Dual Scan Protocol for Edentulous Surgical Guides',
    primary_keyword: 'dual scan protocol dental implants',
    meta_description: 'Complete dual scan protocol for edentulous implant planning. Radiographic guide preparation, fiducial markers, and CBCT fusion workflow.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Edentulous patients', 'Tissue-supported guides', 'Bone-supported guides', 'Prosthetically-driven planning'],
    contraindications: ['Poorly fitting denture without reline', 'Metal components in scan appliance'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: 'Dependent on registration', apical_deviation: 'Dependent on registration', angular_deviation: 'Dependent on registration', source: 'Protocol dependent' },
    troubleshooting: [],
    specs: { 'Fiducial Markers': '6-8 minimum per arch', 'Marker Position': '5mm from gingival margin', 'Marker Size': '1-1.5mm gutta-percha', 'Bite Registration': '2-3mm arch separation', 'Slice Thickness': '0.4mm or less' },
    related_guides: ['cbct-export-for-surgical-guides', 'types-of-surgical-guides', 'cbct-requirements-surgical-guide-planning'],
    faq: [{ question: 'Why is dual scan needed for edentulous patients?', answer: 'It merges prosthetic information (tooth positions) with anatomical data (bone, nerves) enabling prosthetically-driven planning.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  }
}
import type { SurgicalGuide } from './types';

export const surgicalGuides: SurgicalGuide[] = [
  // ============================================================
  // 1. STRAUMANN BLX GUIDED PROTOCOL
  // ============================================================
  {
    slug: 'straumann-blx-guided',
    title: 'Straumann BLX Guided Surgery Protocol',
    meta_description: 'Complete Straumann BLX guided surgery protocol with drill sequences, sleeve specifications, and step-by-step surgical workflow for predictable implant placement.',
    primary_keyword: 'straumann blx surgical guide',
    template: 'protocol',
    guide_type: 'tooth-supported',
    implant_system: 'Straumann BLX',
    manufacturer: 'Straumann',
    compatible_sleeves: ['Straumann Guided Sleeve H4', 'Straumann Guided Sleeve H6'],
    drill_sequence: [
      'Pilot Drill Ø2.2mm',
      'BLX Drill Ø2.8mm',
      'BLX Drill Ø3.2mm (NC)',
      'BLX Drill Ø3.6mm (RC)',
      'Profile Drill (if needed)',
      'Tap (Type 1 bone only)'
    ],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: [
      'Single tooth replacement',
      'Multiple adjacent implants',
      'Full-arch immediate load',
      'All bone types (D1-D4)',
      'Fresh extraction sockets',
      'Immediate placement protocols'
    ],
    contraindications: [
      'Insufficient bone volume after virtual planning',
      'Inability to achieve guide stability',
      'Severe undercuts preventing guide seating',
      'Patient cannot open wide enough for guided surgery'
    ],
    clinical_steps: [
      {
        title: 'Guide Verification',
        content: 'Seat the surgical guide and verify complete seating on teeth/tissue. Check for rocking or instability. Confirm anchor pin sites are accessible.',
        substeps: [
          'Remove any temporary prosthetics',
          'Try-in guide without fixation',
          'Verify occlusal clearance for drill access',
          'Check interocclusal space with guide seated'
        ],
        tip: 'Mark guide orientation with permanent marker before surgery'
      },
      {
        title: 'Guide Fixation',
        content: 'Secure the guide using anchor pins or fixation screws. Minimum 2 anchor pins for partial guides, 3-4 for full-arch.',
        substeps: [
          'Anesthetize anchor pin sites',
          'Drill pilot holes through anchor sleeves',
          'Insert anchor pins to full depth',
          'Verify guide is completely immobile'
        ],
        warning: 'Never proceed with drilling if guide shows any movement'
      },
      {
        title: 'Initial Osteotomy',
        content: 'Begin with the 2.2mm pilot drill through the guided sleeve. Use copious irrigation and intermittent drilling motion.',
        substeps: [
          'Insert drill through sleeve until stop',
          'Activate drill at 800-1200 RPM',
          'Use pumping motion for debris clearance',
          'Drill to full planned depth'
        ],
        tip: 'Maintain 50-70 N/cm² downward pressure for optimal cutting'
      },
      {
        title: 'Sequential Drilling',
        content: 'Progress through the BLX drill sequence according to planned implant diameter. Each drill has a built-in stop for depth control.',
        substeps: [
          'Ø2.8mm drill at 600-800 RPM',
          'Ø3.2mm drill for NC implants',
          'Ø3.6mm drill for RC implants',
          'Profile drill if needed for soft bone'
        ]
      },
      {
        title: 'Implant Placement',
        content: 'Insert the BLX implant through the surgical guide or freehand after guide removal, depending on surgical protocol.',
        substeps: [
          'Mount implant on surgical driver',
          'Initial insertion at 15-25 RPM',
          'Monitor insertion torque',
          'Final seating to planned depth',
          'Verify position with guide or positioning index'
        ],
        tip: 'BLX achieves high primary stability even in soft bone due to its tapered design'
      }
    ],
    prerequisites: [
      'CBCT scan with 0.2-0.4mm voxel size',
      'Digital or conventional impression for guide fabrication',
      'Treatment plan approved in planning software',
      'Surgical guide fabricated and verified',
      'BLX surgical kit with guided components',
      'Anchor pins compatible with guide system'
    ],
    accuracy_data: {
      angular_deviation: '2.7° ± 1.6°',
      apical_deviation: '1.3mm ± 0.7mm',
      coronal_deviation: '0.9mm ± 0.5mm',
      source: 'Straumann clinical studies, 2021'
    },
    troubleshooting: [
      {
        issue: 'Guide does not seat completely',
        cause: 'Interproximal contact or undercut interference',
        solution: 'Identify interference point, relieve guide or adjust tissue'
      },
      {
        issue: 'Drill binds in sleeve',
        cause: 'Debris accumulation or sleeve damage',
        solution: 'Clean sleeve with saline, replace if damaged'
      },
      {
        issue: 'Insufficient primary stability',
        cause: 'Bone density lower than planned',
        solution: 'Consider undersizing final drill or using Profile Drill'
      }
    ],
    specs: {
      'Sleeve Inner Diameter': '4.8mm (H4), 6.0mm (H6)',
      'Sleeve Height': '4mm or 6mm',
      'Drill Stop Mechanism': 'Integrated collar',
      'Implant Diameters': '3.75mm (NC), 4.5mm, 5.0mm, 5.5mm (RC)',
      'Implant Lengths': '6mm, 8mm, 10mm, 12mm, 14mm, 16mm',
      'Primary Stability Range': '35-70 Ncm typical',
      'Recommended Insertion Torque': '35 Ncm minimum for immediate load',
      'Material': 'Roxolid (Ti-Zr alloy)'
    },
    related_guides: [
      'nobel-active-guided',
      'straumann-blt-guided',
      'all-on-4-mandible-protocol',
      'codiagnostix-full-workflow'
    ],
    time_estimate: '45-60 minutes (single implant)',
    difficulty: 'intermediate',
    faq: [
      {
        question: 'Can I use BLX for immediate loading?',
        answer: 'Yes, BLX is specifically designed for immediate loading protocols. With insertion torque ≥35 Ncm and ISQ ≥70, immediate provisional can be placed. The Straumann Pro Arch concept recommends BLX for full-arch immediate function.'
      },
      {
        question: 'What sleeve height should I use?',
        answer: 'H4 (4mm) sleeves for most cases with adequate interocclusal space. H6 (6mm) sleeves for cases requiring more guidance length or when additional stability is needed. H6 provides slightly better accuracy but requires more vertical clearance.'
      },
      {
        question: 'Is tapping required for BLX?',
        answer: 'Tapping is only required in Type 1 (dense cortical) bone. For Types 2-4, the self-cutting apex of BLX eliminates the need for tapping. In Type 1 bone, use the BLX Tap to prevent excessive insertion torque.'
      }
    ],
    published: true
  },

  // ============================================================
  // 2. NOBEL BIOCARE ACTIVE GUIDED PROTOCOL
  // ============================================================
  {
    slug: 'nobel-active-guided',
    title: 'Nobel Biocare NobelActive Guided Surgery Protocol',
    meta_description: 'NobelActive guided surgery workflow with NobelGuide system, drill protocols, and clinical steps for optimal implant placement accuracy.',
    primary_keyword: 'nobel active surgical guide',
    template: 'protocol',
    guide_type: 'tooth-supported',
    implant_system: 'NobelActive',
    manufacturer: 'Nobel Biocare',
    compatible_sleeves: ['NobelGuide Guided Sleeve', 'NobelGuide Anchor Pin Sleeve'],
    drill_sequence: [
      'Start Drill (guided)',
      'Twist Drill Ø2.0mm',
      'Twist Drill Ø2.8/3.2mm',
      'Twist Drill Ø3.6/4.2mm',
      'NobelActive Guided Drill Final'
    ],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: [
      'Compromised bone situations',
      'Immediate placement',
      'Soft bone (Type 3-4)',
      'Cases requiring high primary stability',
      'Full-arch reconstructions',
      'Single and multiple implants'
    ],
    contraindications: [
      'Insufficient bone for planned implant size',
      'Active infection at surgical site',
      'Uncontrolled systemic disease',
      'Inability to achieve guide stability'
    ],
    clinical_steps: [
      {
        title: 'Pre-operative Verification',
        content: 'Verify guide fit on study cast or intraorally. Confirm all components are available and sterile.',
        substeps: [
          'Check guide against planning software output',
          'Verify sleeve positions match plan',
          'Confirm anchor pin positions',
          'Prepare surgical field'
        ]
      },
      {
        title: 'Guide Seating and Fixation',
        content: 'Position surgical guide and secure with anchor pins. NobelGuide uses a minimum of 3 anchor pins for stability.',
        substeps: [
          'Seat guide fully on teeth/tissue',
          'Place anchor pins through guide sleeves',
          'Verify immobility',
          'Check patient comfort and access'
        ],
        warning: 'Ensure guide does not impinge on soft tissue during fixation'
      },
      {
        title: 'Guided Drilling Protocol',
        content: 'Follow NobelGuide drilling sequence with copious irrigation. Use guided drills with depth stops.',
        substeps: [
          'Start Drill through sleeve',
          'Sequential twist drills per diameter',
          'Dense bone: full sequence',
          'Soft bone: may skip intermediate drills'
        ],
        tip: 'NobelActive allows undersizing the osteotomy for enhanced primary stability'
      },
      {
        title: 'Implant Insertion',
        content: 'Insert NobelActive implant using guided or semi-guided technique. Monitor insertion torque throughout.',
        substeps: [
          'Mount implant on NobelActive driver',
          'Insert at 15-25 RPM',
          'Allow threads to self-tap',
          'Final position at planned depth',
          'Document final torque value'
        ],
        tip: 'NobelActive blade threads provide bone condensing for improved stability'
      },
      {
        title: 'Position Verification',
        content: 'Verify implant position matches treatment plan. Consider intraoperative imaging for full-arch cases.',
        substeps: [
          'Visual verification of depth',
          'Check implant axis orientation',
          'Confirm prosthetic screw access',
          'Document with photographs'
        ]
      }
    ],
    prerequisites: [
      'CBCT scan meeting NobelGuide requirements',
      'DTX Studio or NobelClinician treatment plan',
      'NobelGuide surgical template',
      'NobelActive surgical cassette',
      'Anchor pins and guided components'
    ],
    accuracy_data: {
      angular_deviation: '2.4° ± 1.4°',
      apical_deviation: '1.2mm ± 0.6mm',
      source: 'Nobel Biocare clinical documentation, 2022'
    },
    troubleshooting: [
      {
        issue: 'Guide lifts during drilling',
        cause: 'Insufficient anchor pin fixation',
        solution: 'Add additional anchor pins or reposition existing pins'
      },
      {
        issue: 'Implant does not reach planned depth',
        cause: 'Dense bone at apex or debris in osteotomy',
        solution: 'Use bone tap or final drill to full depth, irrigate thoroughly'
      },
      {
        issue: 'Lower than expected insertion torque',
        cause: 'Osteotomy oversized for bone density',
        solution: 'Consider wider or longer implant if bone allows'
      }
    ],
    specs: {
      'Guided Sleeve Diameter': '5.0mm',
      'Sleeve Heights Available': '1.5mm, 3mm, 5mm',
      'Implant Diameters': '3.5mm, 4.3mm, 5.0mm, 6.0mm',
      'Implant Lengths': '7mm, 8.5mm, 10mm, 11.5mm, 13mm, 15mm, 18mm',
      'Connection Type': 'Conical connection with internal hex',
      'Material': 'Grade 4 Titanium with TiUnite surface',
      'Typical Insertion Torque': '35-70 Ncm'
    },
    related_guides: [
      'straumann-blx-guided',
      'zimmer-tsv-guided',
      'all-on-4-mandible-protocol'
    ],
    time_estimate: '40-55 minutes (single implant)',
    difficulty: 'intermediate',
    faq: [
      {
        question: 'What makes NobelActive different from other implants?',
        answer: 'NobelActive features an aggressive blade thread design that condenses bone during insertion, achieving high primary stability even in soft bone. The built-in platform shifting and conical connection optimize crestal bone maintenance.'
      },
      {
        question: 'Can NobelActive be placed in extraction sockets?',
        answer: 'Yes, NobelActive is excellent for immediate placement due to its bone-condensing properties. The variable thread design engages bone beyond the socket apex for stability. Gap grafting may be needed for buccal gaps >2mm.'
      },
      {
        question: 'Which planning software is required?',
        answer: 'DTX Studio Implant (formerly NobelClinician) is the native software, but coDiagnostiX, Implant Studio, and Blue Sky Plan also support NobelGuide output with proper library integration.'
      }
    ],
    published: true
  },

  // ============================================================
  // 3. ZIMMER TSV GUIDED PROTOCOL
  // ============================================================
  {
    slug: 'zimmer-tsv-guided',
    title: 'Zimmer Biomet Tapered Screw-Vent Guided Protocol',
    meta_description: 'Zimmer Biomet TSV guided surgery protocol with drill sequences, Encode sleeve system compatibility, and surgical workflow steps.',
    primary_keyword: 'zimmer tsv surgical guide',
    template: 'protocol',
    guide_type: 'tooth-supported',
    implant_system: 'Tapered Screw-Vent (TSV)',
    manufacturer: 'Zimmer Biomet',
    compatible_sleeves: ['Zimmer Guided Surgery Sleeves', 'Compatible open-system sleeves'],
    drill_sequence: [
      'Pilot Drill 2.3mm',
      'TSV Twist Drill 2.8mm',
      'TSV Twist Drill 3.4mm',
      'TSV Twist Drill 3.8mm',
      'TSV Twist Drill 4.2mm (if needed)',
      'Countersink (optional)'
    ],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: [
      'All bone densities (D1-D4)',
      'Single and multiple implants',
      'Immediate and delayed placement',
      'Full-arch reconstructions',
      'Narrow ridge situations (with appropriate diameter)'
    ],
    contraindications: [
      'Inadequate bone volume',
      'Active periodontitis',
      'Uncontrolled diabetes',
      'Heavy smoking (>10/day) without cessation'
    ],
    clinical_steps: [
      {
        title: 'Guide Preparation',
        content: 'Sterilize or high-level disinfect surgical guide per manufacturer instructions. Verify all sleeves are secure.',
        substeps: [
          'Autoclave if using appropriate resin',
          'Inspect for cracks or damage',
          'Confirm sleeve security',
          'Verify against planning output'
        ]
      },
      {
        title: 'Surgical Access and Guide Placement',
        content: 'Create surgical access (flap or flapless per plan) and seat surgical guide with verification of complete seating.',
        substeps: [
          'Anesthetize surgical site',
          'Raise flap if indicated',
          'Seat guide on teeth/tissue',
          'Verify no interferences'
        ]
      },
      {
        title: 'Anchor Pin Fixation',
        content: 'Secure guide with minimum 2 anchor pins for partial guides, 3+ for full-arch cases.',
        substeps: [
          'Drill anchor pin osteotomies',
          'Insert pins through guide sleeves',
          'Confirm guide stability',
          'Check patient bite clearance'
        ]
      },
      {
        title: 'Sequential Osteotomy',
        content: 'Perform guided drilling sequence according to planned implant diameter. TSV uses progressive drill sizing.',
        substeps: [
          '2.3mm pilot to full depth',
          'Sequential drills per final diameter',
          'Copious irrigation throughout',
          'Clear debris between drills'
        ],
        tip: 'In soft bone (D3-D4), consider undersizing by one drill'
      },
      {
        title: 'Implant Placement',
        content: 'Insert TSV implant using surgical motor or manual driver. Monitor torque and final depth.',
        substeps: [
          'Mount implant on driver',
          '20-25 RPM insertion speed',
          'Monitor insertion torque',
          'Verify depth with guide reference',
          'Document final torque'
        ]
      }
    ],
    prerequisites: [
      'CBCT with appropriate FOV',
      'Treatment plan in compatible software',
      'Surgical guide with verified accuracy',
      'Zimmer TSV surgical kit',
      'Guided drill keys and sleeves'
    ],
    accuracy_data: {
      angular_deviation: '3.1° ± 1.8°',
      apical_deviation: '1.4mm ± 0.8mm',
      source: 'Zimmer Biomet clinical studies, 2020'
    },
    troubleshooting: [
      {
        issue: 'Drill wobbles in sleeve',
        cause: 'Sleeve wear or incorrect drill-sleeve match',
        solution: 'Verify drill-sleeve compatibility, replace sleeve if worn'
      },
      {
        issue: 'Cannot achieve planned depth',
        cause: 'Cortical bone at depth or incorrect length selection',
        solution: 'Use bone tap, verify planned vs actual bone height'
      },
      {
        issue: 'Guide cracks during surgery',
        cause: 'Resin fatigue or sterilization damage',
        solution: 'Use backup guide if available, convert to pilot-only guidance'
      }
    ],
    specs: {
      'Implant Diameters': '3.7mm, 4.1mm, 4.7mm, 5.7mm',
      'Implant Lengths': '8mm, 10mm, 11.5mm, 13mm, 16mm',
      'Connection Type': 'Internal hex (Certain connection)',
      'Thread Type': 'Tapered body with variable thread',
      'Surface': 'MTX (microtextured)',
      'Material': 'Grade 4 Titanium',
      'Prosthetic Platform': '3.5mm, 4.5mm, 5.7mm'
    },
    related_guides: [
      'straumann-blx-guided',
      'nobel-active-guided',
      'biohorizons-tapered-guided'
    ],
    time_estimate: '35-50 minutes (single implant)',
    difficulty: 'beginner',
    faq: [
      {
        question: 'Is TSV compatible with open-system surgical guides?',
        answer: 'Yes, TSV can be used with most open-system surgical guides from third-party providers. Verify drill-to-sleeve compatibility and use appropriate guided drill keys from the TSV surgical cassette.'
      },
      {
        question: 'When should I use the countersink?',
        answer: 'Use the countersink in dense (D1-D2) bone when placing at crestal level to create space for the implant collar. This prevents excessive crestal bone compression and facilitates precise depth control.'
      },
      {
        question: 'What is the Encode healing abutment system?',
        answer: 'Encode abutments have built-in restorative codes that allow the lab to scan the abutment directly without impression copings. This simplifies the restorative workflow but requires compatible scanning and software.'
      }
    ],
    published: true
  },

  // ============================================================
  // 4. ALL-ON-4 MANDIBLE PROTOCOL
  // ============================================================
  {
    slug: 'all-on-4-mandible-protocol',
    title: 'All-on-4 Mandibular Guided Surgery Protocol',
    meta_description: 'Complete All-on-4 mandible guided surgery protocol with tilted implant placement, immediate load criteria, and conversion prosthesis workflow.',
    primary_keyword: 'all-on-4 mandible surgical guide',
    template: 'protocol',
    guide_type: 'bone-supported',
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: [
      'Edentulous mandible',
      'Failing dentition requiring full clearance',
      'Adequate bone anterior to mental foramen',
      'Patient desires fixed prosthesis',
      'Alternative to bone grafting'
    ],
    contraindications: [
      'Severe anterior mandibular atrophy',
      'Uncontrolled bruxism',
      'Unrealistic patient expectations',
      'Inadequate bone height (<10mm) between foramina',
      'Active infection or pathology'
    ],
    clinical_steps: [
      {
        title: 'Pre-surgical Preparation',
        content: 'Verify all components, conversion prosthesis fit, and surgical guide accuracy. Confirm patient medical status.',
        substeps: [
          'Review CBCT and treatment plan',
          'Verify prosthesis converted to surgical guide',
          'Check duplicate prosthesis for conversion',
          'Confirm OR setup and team roles'
        ]
      },
      {
        title: 'Extraction and Alveolectomy',
        content: 'Extract remaining teeth and perform guided alveolectomy to create flat ridge per surgical plan.',
        substeps: [
          'Atraumatic extractions',
          'Place bone reduction guide',
          'Reduce alveolar ridge to planned level',
          'Verify with reduction guide template',
          'Smooth sharp edges'
        ],
        warning: 'Maintain adequate bone height above mental nerve'
      },
      {
        title: 'Surgical Guide Placement',
        content: 'Seat the surgical guide on the prepared ridge. Secure with anchor pins at planned locations.',
        substeps: [
          'Verify guide seats fully on bone',
          'Place 3-4 anchor pins',
          'Confirm rigid fixation',
          'Check clearance for posterior drilling'
        ]
      },
      {
        title: 'Anterior Implant Osteotomies',
        content: 'Prepare the two anterior (vertical) implant sites using guided drilling protocol.',
        substeps: [
          'Pilot drill through guide sleeves',
          'Sequential drilling to planned diameter',
          'Verify depth with guide reference',
          'Irrigate copiously'
        ],
        tip: 'Anterior implants are typically placed parallel to each other'
      },
      {
        title: 'Posterior Implant Osteotomies',
        content: 'Prepare tilted posterior implant sites at 30-45° angulation to avoid mental foramen.',
        substeps: [
          'Pilot drill through angled sleeves',
          'Follow angulation precisely',
          'Sequential drilling maintaining angle',
          'Verify emergence anterior to foramen'
        ],
        warning: 'Never violate the mental foramen - maintain 2mm safety margin'
      },
      {
        title: 'Implant Placement',
        content: 'Insert four implants starting with posterior tilted implants, then anterior. Target 35+ Ncm.',
        substeps: [
          'Place posterior implants first',
          'Verify angulation matches plan',
          'Place anterior implants',
          'Record all insertion torques',
          'All implants must achieve ≥35 Ncm for immediate load'
        ]
      },
      {
        title: 'Multi-unit Abutment Placement',
        content: 'Place angled multi-unit abutments on tilted implants and straight multi-units on vertical implants.',
        substeps: [
          '17° or 30° angulated abutments on tilted implants',
          'Straight abutments on anterior implants',
          'Torque to 15-25 Ncm per manufacturer',
          'Verify all abutment axes converge'
        ]
      },
      {
        title: 'Conversion Prosthesis',
        content: 'Convert the duplicate denture to an immediate fixed prosthesis.',
        substeps: [
          'Place titanium cylinders on abutments',
          'Verify prosthesis fits passively',
          'Pick up cylinders in prosthesis',
          'Remove and finish prosthesis',
          'Verify occlusion and screw access',
          'Torque screws to 15 Ncm'
        ]
      }
    ],
    prerequisites: [
      'Comprehensive treatment plan with CBCT',
      'Surgical guide with bone reduction template',
      'Conversion prosthesis ready',
      'Four implants (typically 4.0-5.0mm × 10-15mm)',
      'Multi-unit abutment set (straight and angled)',
      'Temporary cylinders and prosthetic screws',
      'Surgical team trained in protocol'
    ],
    accuracy_data: {
      angular_deviation: '3.5° ± 2.0°',
      apical_deviation: '1.6mm ± 0.9mm',
      source: 'Malo Clinic published data, systematic reviews'
    },
    troubleshooting: [
      {
        issue: 'Implant does not achieve 35 Ncm',
        cause: 'Soft bone or osteotomy too large',
        solution: 'Consider wider implant, longer implant, or delay loading on that site'
      },
      {
        issue: 'Guide does not seat on bone',
        cause: 'Insufficient alveolectomy',
        solution: 'Additional bone reduction with guide verification'
      },
      {
        issue: 'Posterior implant too close to foramen',
        cause: 'Planning error or surgical deviation',
        solution: 'Verify position radiographically, may need to adjust angle or use alternative site'
      },
      {
        issue: 'Multi-unit abutments do not align',
        cause: 'Implant angulation variance from plan',
        solution: 'Use higher-angle abutments (30° instead of 17°) or custom abutments'
      }
    ],
    specs: {
      'Minimum Implants': '4',
      'Recommended Implant Length': '≥10mm (≥13mm preferred)',
      'Posterior Tilt Angle': '30-45°',
      'A-P Spread Target': '≥10mm',
      'Maximum Cantilever': '1.5× A-P spread (mandible)',
      'Minimum Insertion Torque': '35 Ncm for immediate load',
      'Prosthesis Material': 'PMMA provisional, definitive per plan',
      'Loading Protocol': 'Immediate (same day)'
    },
    related_guides: [
      'all-on-4-maxilla-protocol',
      'straumann-blx-guided',
      'nobel-active-guided',
      'immediate-load-criteria'
    ],
    time_estimate: '2-3 hours (complete procedure)',
    difficulty: 'advanced',
    faq: [
      {
        question: 'Why tilt the posterior implants?',
        answer: 'Tilting posterior implants 30-45° allows placement anterior to the mental foramen while maximizing A-P spread. This avoids nerve damage, engages cortical bone at the implant apex, and reduces or eliminates posterior cantilever.'
      },
      {
        question: 'What if one implant fails to achieve primary stability?',
        answer: 'If one of four implants has inadequate stability (<25 Ncm), options include: (1) place a fifth implant, (2) use a longer/wider implant in the same site, (3) delay loading that quadrant with a three-implant temporary, or (4) delay the entire case for osseointegration.'
      },
      {
        question: 'When can the patient receive their final prosthesis?',
        answer: 'Final prosthesis is typically placed 3-6 months after surgery following implant integration. The conversion prosthesis serves as the provisional during this healing period. Some protocols allow earlier final delivery with monolithic PMMA.'
      }
    ],
    published: true
  },

  // ============================================================
  // 5. CODIAGNOSTIX FULL WORKFLOW
  // ============================================================
  {
    slug: 'codiagnostix-full-workflow',
    title: 'coDiagnostiX Complete Surgical Guide Design Workflow',
    meta_description: 'Step-by-step coDiagnostiX workflow for surgical guide design including DICOM import, implant planning, and guide export for 3D printing.',
    primary_keyword: 'codiagnostix surgical guide workflow',
    template: 'protocol',
    guide_type: 'tooth-supported',
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: [
      'Single implant planning',
      'Multiple implant planning',
      'Full-arch guided surgery',
      'Stackable guide design',
      'Implant-supported overdentures'
    ],
    contraindications: [
      'CBCT artifacts preventing accurate segmentation',
      'Inadequate scan quality',
      'Missing prosthetic planning input'
    ],
    clinical_steps: [
      {
        title: 'Case Setup and DICOM Import',
        content: 'Create new case and import DICOM data from CBCT scan. Verify scan quality and orientation.',
        substeps: [
          'File > New Case',
          'Import DICOM folder',
          'Verify patient orientation (nose up, eyes forward)',
          'Check slice thickness (≤0.4mm ideal)',
          'Set correct arch (maxilla/mandible)'
        ],
        tip: 'Name cases with patient ID and date for easy retrieval'
      },
      {
        title: 'Surface Scan Integration',
        content: 'Import intraoral scan or model scan for prosthetic planning and guide design.',
        substeps: [
          'Import STL from scanner',
          'Use automatic registration if available',
          'Manual alignment if needed',
          'Verify fit against CBCT teeth',
          'Lock registration when aligned'
        ],
        warning: 'Poor scan alignment will cause guide misfit - verify carefully'
      },
      {
        title: 'Anatomical Markup',
        content: 'Mark critical anatomical structures including nerve canals, sinuses, and adjacent roots.',
        substeps: [
          'Trace mandibular canal bilaterally',
          'Mark mental foramen exits',
          'Outline maxillary sinus boundaries',
          'Mark adjacent tooth roots',
          'Set safety margins (default 2mm)'
        ]
      },
      {
        title: 'Implant Selection and Planning',
        content: 'Select implant system, size, and position each implant according to prosthetic goals.',
        substeps: [
          'Select implant library (Straumann, Nobel, etc.)',
          'Choose implant diameter and length',
          'Position implant for prosthetic emergence',
          'Adjust angulation and depth',
          'Verify clearance from anatomical structures',
          'Check inter-implant distance (≥3mm)'
        ],
        tip: 'Start with prosthetic position, then adjust for bone'
      },
      {
        title: 'Sleeve Selection',
        content: 'Select appropriate guided sleeve system and height for each implant position.',
        substeps: [
          'Choose sleeve system (manufacturer or universal)',
          'Select sleeve height based on access',
          'Verify sleeve does not interfere with adjacent teeth',
          'Check inter-sleeve clearance',
          'Verify drill access angulation'
        ]
      },
      {
        title: 'Guide Design',
        content: 'Design surgical guide parameters including support type, extension, and inspection windows.',
        substeps: [
          'Select guide type (tooth, mucosa, bone)',
          'Set guide extension and thickness',
          'Add anchor pin positions',
          'Create inspection windows if needed',
          'Add labeling (patient name, date)',
          'Verify guide design in 3D view'
        ]
      },
      {
        title: 'Export for Manufacturing',
        content: 'Export surgical guide STL and surgical report for fabrication.',
        substeps: [
          'File > Export > Surgical Guide',
          'Select STL format',
          'Export surgical report PDF',
          'Save case file',
          'Send to lab or in-house printer'
        ]
      }
    ],
    prerequisites: [
      'coDiagnostiX license (local or cloud)',
      'CBCT DICOM data',
      'Intraoral or model scan (STL)',
      'Implant library installed',
      'Sleeve library installed'
    ],
    troubleshooting: [
      {
        issue: 'DICOM import fails',
        cause: 'Corrupted data or incompatible format',
        solution: 'Re-export from CBCT software, verify DICOM compliance'
      },
      {
        issue: 'Scan registration inaccurate',
        cause: 'Tooth movement between scan and CBCT or poor STL quality',
        solution: 'Manual adjustment of registration points, consider rescan'
      },
      {
        issue: 'Sleeve collision with adjacent structures',
        cause: 'Limited vertical or horizontal space',
        solution: 'Use shorter sleeve height or adjust implant position/angulation'
      },
      {
        issue: 'Guide too thin in some areas',
        cause: 'Anatomy limits guide extension',
        solution: 'Add reinforcement, modify guide boundaries, consider stackable design'
      }
    ],
    specs: {
      'Supported DICOM': 'DICOM 3.0 compliant',
      'Supported STL': 'Binary and ASCII STL',
      'Implant Libraries': '80+ manufacturers',
      'Sleeve Systems': 'All major guided systems',
      'Export Formats': 'STL, PLY, surgical report PDF',
      'Minimum CBCT Resolution': '0.4mm voxel (0.2mm preferred)',
      'Guide Output': 'Additive manufacturing ready'
    },
    related_guides: [
      'straumann-blx-guided',
      'nobel-active-guided',
      'blue-sky-plan-workflow',
      'implant-studio-workflow'
    ],
    time_estimate: '20-45 minutes per case',
    difficulty: 'intermediate',
    faq: [
      {
        question: 'Which implant systems are supported?',
        answer: 'coDiagnostiX supports 80+ implant manufacturers through its implant library. Major systems including Straumann, Nobel Biocare, Zimmer Biomet, Dentsply, BioHorizons, and many others have complete libraries. Custom implants can be added via CAD import.'
      },
      {
        question: 'Can I design stackable guides?',
        answer: 'Yes, coDiagnostiX supports stackable guide design where multiple guides share a common base. This is useful for complex cases requiring pilot-only guidance initially followed by full-depth guidance in a second guide.'
      },
      {
        question: 'What 3D printers are compatible?',
        answer: 'The exported STL file is compatible with any SLA/DLP 3D printer using biocompatible surgical guide resin. Common options include Formlabs Form 3B, Asiga, SprintRay, and Stratasys. Verify resin is Class IIa certified for intraoral surgical use.'
      }
    ],
    published: true
  }
];,

  // ============================================
  // CBCT & PLANNING PROTOCOLS - Added Dec 30, 2024
  // ============================================

  {
    slug: 'cbct-requirements-surgical-guide-planning',
    title: 'CBCT Requirements for Surgical Guide Planning',
    primary_keyword: 'CBCT surgical guide planning',
    meta_description: 'Complete CBCT requirements for dental implant surgical guide planning. Learn voxel size, FOV selection, DICOM export, and metal artifact reduction protocols.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Single implant planning', 'Multiple implant planning', 'Full arch implant planning', 'Guided surgery protocols', 'Complex anatomical cases'],
    contraindications: ['Pregnancy (relative)', 'Recent head/neck radiation', 'Patient unable to remain still'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '1.0mm', apical_deviation: '1.2mm', angular_deviation: '3.8°', source: 'ITI Consensus' },
    troubleshooting: [],
    specs: { 'Recommended Voxel Size': '0.3-0.4mm', 'Small FOV': '5x5 cm', 'Medium FOV': '8x8 cm', 'Safety Margin': '2mm minimum' },
    related_guides: ['prosthetically-driven-implant-surgery', 'full-arch-implant-treatment-planning'],
    faq: [{ question: 'What voxel size for implant planning?', answer: '0.3-0.4mm is adequate per ITI Consensus.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'full-arch-implant-treatment-planning',
    title: 'Full Arch Implant Treatment Planning Protocol',
    primary_keyword: 'full arch implant planning',
    meta_description: 'Comprehensive full arch implant treatment planning guide. Patient selection, implant number, A-P spread optimization, prosthesis type selection.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Complete edentulism', 'Terminal dentition', 'Failed removable prosthesis'],
    contraindications: ['Active bisphosphonate therapy', 'Craniofacial radiotherapy', 'Uncontrolled diabetes'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '1.0-1.5mm', apical_deviation: '1.2-1.8mm', angular_deviation: '3.5-5°', source: 'ITI Consensus 2018' },
    troubleshooting: [],
    specs: { 'Minimum Implants': '4 per arch', 'Optimal Implants': '4-6', 'Mandible Cantilever': '10-12mm max', 'Maxilla Cantilever': '6-8mm max' },
    related_guides: ['immediate-load-full-arch-planning', 'all-on-4-mandible-protocol'],
    faq: [{ question: 'How many implants for full arch?', answer: 'Minimum 4 per ITI Consensus, 4-6 optimal.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'prosthetically-driven-implant-surgery',
    title: 'Prosthetically Driven Implant Surgery Protocol',
    primary_keyword: 'prosthetically driven implant placement',
    meta_description: 'Complete guide to prosthetically driven implant surgery. Restorative space requirements, implant positioning guidelines, backward planning workflow.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Single tooth replacement', 'Multiple adjacent implants', 'Full arch rehabilitation', 'Aesthetic zone cases'],
    contraindications: ['Inadequate bone without augmentation', 'Severe anatomical limitations'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '1.0mm', apical_deviation: '1.2mm', angular_deviation: '3.5-5°', source: 'Systematic reviews' },
    troubleshooting: [],
    specs: { 'Screw-Retained Space': '4-7.5mm', 'Cement-Retained Space': '7-8mm', 'Mesiodistal to Tooth': '1.5-2mm min', 'Interimplant': '3mm min' },
    related_guides: ['cbct-requirements-surgical-guide-planning', 'full-arch-implant-treatment-planning'],
    faq: [{ question: 'What is prosthetically driven surgery?', answer: 'Planning where final prosthetic outcome determines implant position, not just bone availability.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  },
  {
    slug: 'immediate-load-full-arch-planning',
    title: 'Immediate Load Full Arch Planning Protocol',
    primary_keyword: 'immediate load full arch implants',
    meta_description: 'Complete immediate load full arch implant protocol. Primary stability requirements, prosthesis design, patient selection, same-day teeth workflow.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Complete edentulism with adequate bone', 'Terminal dentition', 'Patient desiring same-day teeth'],
    contraindications: ['Uncontrolled systemic diseases', 'Head/neck radiotherapy', 'Uncontrolled bruxism', 'Inadequate bone'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '1.0-1.5mm', apical_deviation: '1.2-1.8mm', angular_deviation: '3.5-5°', source: 'Immediate load reviews' },
    troubleshooting: [],
    specs: { 'Min Torque Per Implant': '30-35 Ncm', 'Optimal Torque': '35-45 Ncm', 'Cumulative Torque': '120 Ncm min', 'Posterior Space': '13mm min', 'Anterior Space': '15mm min' },
    related_guides: ['full-arch-implant-treatment-planning', 'all-on-4-mandible-protocol'],
    faq: [{ question: 'What torque for immediate loading?', answer: 'Minimum 30-35 Ncm per implant, 120 Ncm cumulative for 4 implants.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  }

// ============================================================
// HELPER FUNCTIONS
// ============================================================

export function getSurgicalGuideBySlug(slug: string): SurgicalGuide | undefined {
  return surgicalGuides.find(guide => guide.slug === slug);
}

export function getPublishedSurgicalGuides(): SurgicalGuide[] {
  return surgicalGuides.filter(guide => guide.published);
}

export function getRelatedSurgicalGuides(currentSlug: string, limit = 3): SurgicalGuide[] {
  const current = getSurgicalGuideBySlug(currentSlug);
  if (!current) return [,
  {
    slug: 'surgical-guide-instructions-for-use',
    title: 'Surgical Guide Instructions for Use (IFU) Requirements',
    primary_keyword: 'surgical guide instructions for use',
    meta_description: 'Complete surgical guide IFU requirements including sterilization protocols, contraindications, storage guidelines, and regulatory compliance for dental implant procedures.',
    guide_type: 'documentation',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Single implant placement', 'Multiple implant placement', 'Full arch rehabilitation'],
    contraindications: ['Insufficient bone volume', 'Uncontrolled diabetes', 'Active periodontal disease'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '0.9mm', apical_deviation: '1.2mm', angular_deviation: '3.5deg', source: 'Tahmaseb 2018' },
    troubleshooting: [],
    specs: { 'Regulatory Classification': 'Class I/II Medical Device', 'Sterilization': 'Autoclave 121C/20min or 134C/10min', 'Shelf Life': '2 years sealed', 'Reuse Policy': 'Single use only' },
    related_guides: ['types-of-surgical-guides'],
    faq: [{ question: 'Are surgical guides reusable?', answer: 'No. Single-use devices only.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  }

,
  {
    slug: 'surgical-guide-implant-compatibility',
    title: 'Surgical Guide Implant System Compatibility Chart',
    primary_keyword: 'surgical guide implant compatibility',
    meta_description: 'Complete compatibility chart for surgical guide sleeves, drill keys, and implant systems. Covers Straumann, Nobel, Zimmer, BioHorizons sleeve dimensions and drilling protocols.',
    guide_type: 'reference',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: ['2.0mm', '2.2mm', '2.8mm', '3.4mm', '4.0mm', '5.0mm'],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Guided pilot drilling', 'Fully guided surgery', 'Partially guided surgery'],
    contraindications: ['Incompatible sleeve-drill combinations', 'Non-validated third-party components'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '0.8mm', apical_deviation: '1.0mm', angular_deviation: '2.7deg', source: 'Van Assche 2012' },
    troubleshooting: [],
    specs: { 'Standard Sleeve ID': '5.0mm (Straumann)', 'Universal Sleeve ID': '4.0mm', 'Pilot Sleeve ID': '2.0-2.2mm', 'Drill Key Tolerance': '0.1mm', 'Sleeve Height Options': '5mm and 10mm', 'Material': 'Titanium or Stainless Steel', 'Software Libraries': 'coDiagnostiX, 3Shape, SMOP, ExoPlan', 'Sleeve Attachment': 'Press-fit or bonded', 'Max Drill Speed': '1500 RPM', 'Irrigation': 'Required - internal or external' },
    related_guides: ['types-of-surgical-guides', 'straumann-blx-guided'],
    faq: [{ question: 'Can I use any drill with any sleeve?', answer: 'No. Drill outer diameter must match sleeve inner diameter within 0.1mm tolerance for accurate guidance.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  }

,
  {
    slug: 'surgical-guide-sterilization-protocols',
    title: 'Surgical Guide Sterilization: Autoclave Parameters and Dimensional Accuracy',
    primary_keyword: 'surgical guide sterilization',
    meta_description: 'Evidence-based sterilization protocols for 3D printed surgical guides. Autoclave parameters, dimensional accuracy data, and resin-specific validation from peer-reviewed research.',
    guide_type: 'protocol',
    implant_system: 'Universal',
    manufacturer: 'Multiple',
    compatible_sleeves: [],
    drill_sequence: [],
    planning_software: ['coDiagnostiX', 'Blue Sky Plan', '3Shape Implant Studio', 'DTX Studio Implant', 'exoplan', 'SMOP', 'Simplant Pro', 'Planmeca Romexis', 'Invivo5', 'OnDemand3D', 'R2Gate', 'SICAT Implant', 'Galileos Implant', 'NobelClinician', 'CEREC', 'Guide Mia', 'Neodent iGuide', 'Osstem OneGuide', 'Straumann CARES'],
    indications: ['Pre-surgical preparation', 'Infection control', 'Regulatory compliance'],
    contraindications: ['Cracked or damaged guides', 'Re-sterilization of single-use devices'],
    clinical_steps: [],
    accuracy_data: { entry_point_deviation: '6-21 microns post-autoclave', apical_deviation: '20.6 microns bucco-lingual', angular_deviation: 'Minimal', source: 'Journal of Prosthodontics 2025, 3D Printing in Medicine 2024' },
    troubleshooting: [],
    specs: { 'Cycle A - Standard': '121C / 1 bar / 20 min + dry', 'Cycle B - Flash': '134C / 2 bar / 10 min + dry', 'Chemical Alternative': '70% isopropyl 15-20 min (disinfection only)', 'Dimensional Change - Autoclave': '6-21 microns', 'Dimensional Change - Chemical': 'Less than 1 micron', 'Dry Cycle Required': '20-30 minutes minimum', 'Post-Sterilization Shelf Life': '24 hours', 'Validated Resins': 'Formlabs Surgical Guide, NextDent SG, SprintRay SG3, MED610', 'Sterility Assurance Level': 'SAL 10-6 (autoclave only)', 'Reuse Policy': 'Single use - do not re-sterilize' },
    related_guides: ['surgical-guide-instructions-for-use', 'surgical-guide-accuracy-factors', 'types-of-surgical-guides'],
    faq: [{ question: 'Does autoclaving reduce surgical guide accuracy?', answer: 'Studies show 6-21 micron shrinkage, primarily bucco-lingually. Staying within validated parameters (121C/20min or 134C/10min) keeps deviation clinically acceptable.' }, { question: 'Can I use chemical disinfection instead?', answer: '70% isopropyl alcohol causes less dimensional change but achieves disinfection, not sterilization. It does not meet SAL 10-6 requirements for surgical procedures.' }],
    last_updated: '2024-12-30',
    author: 'Titan Surgical Clinical Team',
    published: true
  }

];