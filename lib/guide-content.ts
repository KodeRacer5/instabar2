// Guide Content Data - All clinical library content
// Organized by slug for easy lookup

export interface GuideContentSection {
  title: string;
  content: string | string[]; // string for paragraphs, array for lists/steps
}

export interface GuideContent {
  overview: string;
  whatYouNeed: string[];
  steps: { title: string; content: string }[];
  tips: string[];
  mistakes: { title: string; content: string }[];
  instaBarHelps: string;
  externalRefs?: { title: string; url: string }[];
}

// Helper to check if content exists for a slug
export function hasContent(slug: string): boolean {
  return slug in guideContent;
}

// Get content by slug
export function getGuideContent(slug: string): GuideContent | null {
  return guideContent[slug] || null;
}

export const guideContent: Record<string, GuideContent> = {
  // ============================================================
  // CLINICAL GUIDES (10)
  // ============================================================

  'full-arch-impression': {
    overview: `Taking an accurate full arch implant impression is the foundation of every successful implant-supported prosthesis. Unlike single-unit restorations, multi-implant cases compound any positional error across all fixtures, making precision critical. A flawed impression leads to frameworks that rock, screw holes that don't align, and prosthetics destined for the remake pile.`,
    whatYouNeed: [
      'Open-tray impression copings compatible with your implant system',
      'Implant-specific hex drivers and torque wrench',
      'Custom open-tray impression tray with adequate clearance',
      'Polyvinyl siloxane (PVS) or polyether impression material',
      'Splinting material (dental floss, acrylic resin, or metal verification jig)',
      'Bite registration material',
      'Articulating paper',
    ],
    steps: [
      {
        title: 'Remove the Prosthesis and Assess Tissue Health',
        content:
          'Remove the existing provisional or definitive prosthesis and evaluate the peri-implant soft tissue. Healthy tissue should appear pink and firm without signs of inflammation or suppuration. Clean around each implant platform with chlorhexidine and dry thoroughly. Document any tissue abnormalities before proceeding.',
      },
      {
        title: 'Connect Impression Copings',
        content:
          'Thread impression copings onto each implant, ensuring the anti-rotational hex engages fully. Hand-tighten first, then apply manufacturer-recommended torque (typically 10-15 Ncm). Verify each coping is fully seated by checking that no gap exists between the coping base and implant platform.',
      },
      {
        title: 'Splint the Impression Copings',
        content:
          'Rigid splinting prevents individual copings from shifting during impression removal. Connect all copings using your preferred method: dental floss embedded in acrylic resin, light-cured composite bars, or a prefabricated metal verification jig. Allow adequate polymerization time and section/relute if using resin to compensate for shrinkage.',
      },
      {
        title: 'Try-In the Custom Tray',
        content:
          'Seat your custom open-tray over the splinted copings. Confirm adequate clearance around each coping access hole (minimum 2mm circumferentially). The tray should seat passively without contacting the copings or splint material. Mark any interference points and relieve with an acrylic bur.',
      },
      {
        title: 'Apply Tray Adhesive',
        content:
          'Paint a thin, even layer of adhesive specific to your impression material on all internal tray surfaces. Allow the adhesive to dry completely per manufacturer instructions (typically 3-5 minutes). Tacky adhesive prevents impression material from separating from the tray during removal.',
      },
      {
        title: 'Inject and Seat',
        content:
          'Syringe light-body impression material around each coping, ensuring complete coverage of the coping-implant interface. Load the tray with heavy-body material and seat with firm, even pressure. Maintain stability throughout the setting time. Avoid any movement that could introduce distortion.',
      },
      {
        title: 'Unscrew and Remove',
        content:
          'Once the material has fully set, unscrew each impression coping through the tray access holes. Use the correct hex driver and break torque smoothly to avoid rotating the copings within the impression. Lift the tray straight up in the path of insertion. The copings should remain embedded in the impression material.',
      },
      {
        title: 'Inspect and Verify',
        content:
          'Examine the impression for voids, tears, or pulls around each coping. Verify all copings transferred and remain rigidly splinted. Check that analog interfaces are clean and undamaged. Any defect requires remaking the impression—proceeding with a compromised impression guarantees a misfit framework.',
      },
    ],
    tips: [
      'Use open-tray technique exclusively for multi-implant cases; closed-tray introduces unacceptable positional error',
      'Allow acrylic splint material to cure completely, then section and relute to eliminate polymerization shrinkage',
      'Take a verification record with the master cast to confirm accuracy before framework fabrication',
      'Communicate implant system and connection type clearly to your laboratory',
    ],
    mistakes: [
      {
        title: 'Inadequate splinting rigidity',
        content:
          'Flexible splints allow copings to shift during impression removal, transferring inaccurate positions to the master cast.',
      },
      {
        title: 'Insufficient tray clearance',
        content:
          'Copings contacting the tray create stress points that distort the impression upon removal.',
      },
      {
        title: 'Skipping the verification step',
        content:
          'Proceeding to framework fabrication without verifying master cast accuracy leads to costly remakes when the framework fails to seat passively.',
      },
    ],
    instaBarHelps: `Insta-Bar eliminates the primary source of full arch impression error: polymerization shrinkage. By replacing resin splinting with rigid stainless steel links, Insta-Bar maintains true implant spatial relationships throughout the impression process. The metal construction cannot flex under removal forces, ensuring your master cast reflects actual intraoral implant positions.`,
  },

  'splint-copings': {
    overview: `Splinting impression copings is the critical step that separates accurate full arch impressions from framework disasters. Without rigid connection between copings, each fixture transfers independently during impression removal, allowing microscopic shifts that compound into macroscopic misfit. The challenge lies in achieving true rigidity while managing the polymerization shrinkage inherent in conventional resin splinting methods.`,
    whatYouNeed: [
      'Impression copings seated on all implants',
      'Dental floss or orthodontic wire',
      'Pattern resin or light-cured composite',
      'Sectioning disc and slow-speed handpiece',
      'Low-shrinkage reluting material',
      'Alternatively: Insta-Bar metal verification jig kit',
    ],
    steps: [
      {
        title: 'Plan Your Splint Configuration',
        content:
          "Assess the arch geometry and implant positions. For four implants, create a rigid framework connecting all four points. For six or more implants, consider additional cross-arch connections for maximum stability. Visualize the splint path to ensure it won't interfere with impression tray seating or material flow.",
      },
      {
        title: 'Create the Primary Connection (Floss/Wire Method)',
        content:
          'Wrap dental floss or orthodontic wire around each impression coping, creating taught connections between adjacent copings. The floss provides a scaffold for resin application and helps distribute stress. Secure the floss tightly—any slack allows movement during polymerization.',
      },
      {
        title: 'Apply Pattern Resin',
        content:
          'Mix pattern resin to a slightly runny consistency and flow it over the floss connections, building up sufficient bulk for rigidity (minimum 3mm diameter). Work quickly before the resin becomes too viscous. Cover all floss completely to encapsulate the scaffold. Allow full polymerization per manufacturer instructions.',
      },
      {
        title: 'Section the Splint',
        content:
          "This is the critical shrinkage-compensation step. Using a thin sectioning disc, cut completely through the resin splint between each pair of copings. Make cuts perpendicular to the splint axis. The sections will have shifted slightly due to polymerization shrinkage—you'll correct this in the next step.",
      },
      {
        title: 'Relute the Sections',
        content:
          'Apply a thin mix of pattern resin to rejoin the sectioned areas. Use minimal material to reduce secondary shrinkage. Allow complete polymerization. This section-and-relute technique breaks the shrinkage vector, allowing each segment to shrink independently before reconnection.',
      },
      {
        title: 'Verify Rigidity',
        content:
          'Apply lateral force to the completed splint. There should be zero perceptible movement or flex. Test each connection point individually. Any flex indicates insufficient bulk or incomplete polymerization—reinforce before proceeding to the impression.',
      },
      {
        title: 'Alternative: Metal Splinting',
        content:
          "For guaranteed rigidity without shrinkage concerns, use a prefabricated metal verification jig system. Connect stainless steel links between impression copings using the manufacturer's locking mechanism. Metal splints eliminate polymerization variables entirely.",
      },
    ],
    tips: [
      'Allow resin to polymerize completely before sectioning; premature cutting introduces additional distortion',
      'Make section cuts as thin as possible to minimize the gap requiring reluting',
      'Consider multiple section-relute cycles for maximum accuracy in critical cases',
      'Document your splinting technique for laboratory reference',
    ],
    mistakes: [
      {
        title: 'Skipping the section-relute step',
        content:
          'Unsectioned resin splints contain 6-7% polymerization shrinkage that directly transfers to your master cast as positional error.',
      },
      {
        title: 'Insufficient splint bulk',
        content:
          'Thin resin connections flex under impression removal forces, negating the purpose of splinting.',
      },
      {
        title: 'Contaminating cut surfaces',
        content:
          'Oil, saliva, or debris on sectioned surfaces prevents proper reluting adhesion, creating weak points.',
      },
    ],
    instaBarHelps: `Insta-Bar completely bypasses the splinting dilemma by providing pre-fabricated stainless steel links that connect impression copings with zero polymerization shrinkage. The rigid metal construction cannot flex under any clinically relevant force, and the system requires no curing time, sectioning, or reluting. What takes 20+ minutes with resin takes 2 minutes with Insta-Bar—with superior accuracy.`,
  },

  'make-verification-jig': {
    overview: `A verification jig is your insurance policy against framework misfit. This rigid structure connects to multiple implants simultaneously, allowing you to confirm that your master cast accurately represents intraoral implant positions before committing to expensive framework fabrication. Investing 15 minutes in verification can save thousands in remakes and hours of chair time correcting prosthetic failures.`,
    whatYouNeed: [
      'Temporary cylinders or verification jig copings for your implant system',
      'Pattern resin or light-cured composite (for conventional method)',
      'Sectioning disc and slow-speed handpiece',
      'Hex drivers and torque wrench',
      'Articulating paper',
      'Alternatively: Insta-Bar metal verification jig kit',
    ],
    steps: [
      {
        title: 'Select Your Verification Method',
        content:
          'Choose between conventional resin fabrication or prefabricated metal systems. Resin jigs are economical but require meticulous technique to manage shrinkage. Metal jigs eliminate shrinkage variables but require compatible components. Consider case complexity, available time, and accuracy requirements.',
      },
      {
        title: 'Seat Verification Copings (Conventional Method)',
        content:
          'Thread temporary cylinders or dedicated verification copings onto each implant. These components serve as the foundation for your resin jig. Ensure full seating by verifying zero gap at the implant-coping interface. Hand-tighten initially, then apply 10-15 Ncm torque.',
      },
      {
        title: 'Connect with Pattern Resin',
        content:
          'Apply pattern resin between adjacent copings, building sufficient bulk for rigidity (3-4mm minimum cross-section). Create a continuous framework connecting all implants. Work efficiently before material viscosity increases. Avoid incorporating voids or air bubbles that weaken the structure.',
      },
      {
        title: 'Allow Complete Polymerization',
        content:
          'Wait the full manufacturer-recommended cure time. Premature manipulation introduces stress and distortion. The jig should feel completely rigid with no tackiness. Room temperature affects cure time—allow extra time in cooler environments.',
      },
      {
        title: 'Section and Relute',
        content:
          'Cut completely through the resin between each coping pair. This releases polymerization shrinkage stress. Relute each section with fresh resin, using minimal material to reduce secondary shrinkage. Allow complete cure between each reluting step for maximum accuracy.',
      },
      {
        title: 'Remove and Inspect',
        content:
          'Unscrew all copings and remove the completed jig. Inspect for voids, cracks, or weak connection points. The jig should be rigid with no flex. Test by holding one end and applying pressure to the opposite end—any movement indicates inadequate rigidity.',
      },
      {
        title: 'Alternative: Assemble Metal Jig',
        content:
          "For metal verification systems, connect prefabricated stainless steel links between seated copings. Follow the manufacturer's assembly sequence. Engage locking mechanisms fully. Metal jigs require no cure time and provide immediate, guaranteed rigidity.",
      },
    ],
    tips: [
      'Fabricate the jig at the impression appointment for same-day verification capability',
      'Store completed jigs in sealed containers to prevent contamination',
      'Label each jig with patient name, date, and arch for easy identification',
      'Consider fabricating backup jigs for complex cases',
    ],
    mistakes: [
      {
        title: 'Insufficient rigidity',
        content:
          'Thin connections flex under torque, providing false-positive fit verification. Build adequate bulk.',
      },
      {
        title: 'Skipping section-relute',
        content:
          'The 6-7% polymerization shrinkage of unsectioned resin jigs directly translates to verification error.',
      },
      {
        title: 'Reusing contaminated jigs',
        content:
          'Debris or biofilm on coping interfaces prevents accurate seating. Clean thoroughly before each use.',
      },
    ],
    instaBarHelps: `Insta-Bar transforms verification jig fabrication from a technique-sensitive procedure into a simple assembly process. Prefabricated stainless steel links connect to standard verification copings in seconds, creating a rigid framework with zero polymerization shrinkage. The metal construction is reusable, sterilizable, and compatible with all major implant systems—eliminating both the time and error sources of conventional jig fabrication.`,
  },

  'verify-implant-position': {
    overview: `Implant position verification is the checkpoint that separates successful prosthetic outcomes from costly failures. Before investing in framework fabrication, you must confirm that your master cast accurately represents the three-dimensional spatial relationships between all implants in the arch. A framework designed on an inaccurate cast will never seat passively, regardless of how precisely it's milled.`,
    whatYouNeed: [
      'Verification jig (resin or metal)',
      'Master cast with implant analogs',
      'Hex drivers and calibrated torque wrench',
      'Dental explorer or probe',
      'Magnification (loupes or microscope)',
      'Disclosing medium (fit checker or articulating film)',
    ],
    steps: [
      {
        title: 'Prepare the Verification Jig',
        content:
          'Inspect your verification jig for damage, contamination, or deformation. Clean all coping interfaces with alcohol and air dry. If using a resin jig, verify rigidity by applying lateral force—any flex invalidates the verification. Metal jigs should have all connections securely locked.',
      },
      {
        title: 'Seat the Jig Intraorally',
        content:
          'Position the verification jig over the implants and hand-thread each coping onto its corresponding implant. Do not apply torque yet. All copings should engage their implants simultaneously without forcing any connection. Resistance or binding suggests positional discrepancy.',
      },
      {
        title: 'Perform Single-Screw Test',
        content:
          'Select the most posterior implant on one side. Apply full seating torque (15-20 Ncm) to this single coping only. With only one screw tightened, examine all other coping-implant interfaces for gaps. Use an explorer to probe the junction—any detectable space indicates positional error.',
      },
      {
        title: 'Check Under Magnification',
        content:
          'Evaluate each unseated coping-implant interface under 2.5x minimum magnification. Look for vertical gaps, angular discrepancies, or horizontal offsets. Even 50 microns of visible gap will compound to significant framework misfit. Document any discrepancies for laboratory communication.',
      },
      {
        title: 'Repeat on Opposite Side',
        content:
          'Release the torqued screw and repeat the single-screw test from the opposite posterior position. This evaluates the arch from a different reference point. Consistent gap patterns suggest systematic error; varying patterns indicate random positional inaccuracies.',
      },
      {
        title: 'Apply Disclosing Medium',
        content:
          'For subtle discrepancies, apply fit checking material or articulating film to the coping interfaces. Seat the jig and tighten one screw. Remove and examine the impression pattern—uniform contact indicates accurate fit; uneven or absent contact reveals positional error.',
      },
      {
        title: 'Verify Against Master Cast',
        content:
          'Seat the same verification jig on your master cast analogs. Perform identical single-screw testing. The fit should match what you observed intraorally. Discrepancies between clinical and cast fit confirm master cast inaccuracy.',
      },
      {
        title: 'Document and Communicate',
        content:
          'Record verification findings, including which positions showed gaps and approximate magnitude. This information guides laboratory decisions about proceeding with fabrication or requesting a new impression.',
      },
    ],
    tips: [
      'Perform verification at the impression appointment if time permits—catch errors before they propagate',
      'Use consistent torque values for repeatable testing',
      'Clean implant platforms thoroughly before verification; debris mimics positional error',
      'When in doubt, remake the impression rather than proceeding with a questionable cast',
    ],
    mistakes: [
      {
        title: 'Tightening multiple screws simultaneously',
        content:
          'This masks positional errors by forcing the jig to conform. Single-screw testing reveals true accuracy.',
      },
      {
        title: 'Using flexible verification jigs',
        content:
          'A jig that flexes provides false-positive verification. Only rigid jigs give meaningful results.',
      },
      {
        title: 'Accepting marginal fit',
        content:
          '"Close enough" at verification becomes "won\'t seat" at framework try-in. Demand perfect fit before proceeding.',
      },
    ],
    instaBarHelps: `Insta-Bar's rigid stainless steel construction provides unambiguous verification results. Unlike resin jigs that may flex imperceptibly and mask errors, metal links maintain absolute rigidity under torque. When an Insta-Bar jig shows a gap, you can trust it's a real positional discrepancy, not jig deformation. This certainty enables confident clinical decision-making about proceeding or reimpressing.`,
  },

  'passive-fit': {
    overview: `The Sheffield test, also known as the single-screw or one-screw test, is the gold standard method for evaluating passive fit of implant frameworks. Developed at the University of Sheffield, this elegant protocol isolates framework accuracy by eliminating the masking effect of multiple screws drawing a misfit framework into position. A framework that passes the Sheffield test will seat without inducing stress on the implants or supporting bone.`,
    whatYouNeed: [
      'Implant framework or verification jig',
      'Hex driver compatible with prosthetic screws',
      'Calibrated torque wrench',
      'Dental explorer',
      'Magnification (2.5x minimum, higher preferred)',
      'Good illumination (headlight or operatory light positioned optimally)',
    ],
    steps: [
      {
        title: 'Prepare the Framework',
        content:
          "Clean the framework's implant interfaces thoroughly with alcohol. Remove any debris, stone, or residue that could interfere with seating. Inspect each interface for manufacturing defects, burrs, or damage. The framework should be free of any obstruction to full analog/implant engagement.",
      },
      {
        title: 'Position the Framework',
        content:
          'Seat the framework over the implants, allowing it to rest passively without any screw engagement. The framework should drop into approximate position guided by the implant connections. Do not force or press the framework—observe its natural seating tendency.',
      },
      {
        title: 'Select the First Test Position',
        content:
          'Choose the most distal implant on either side as your first torque point. This position maximizes the lever arm, making any anterior discrepancies more apparent. The longer the span from the torqued screw, the more obvious any misfit becomes.',
      },
      {
        title: 'Apply Torque to Single Screw',
        content:
          'Thread the prosthetic screw into the selected position and apply full seating torque (typically 15-35 Ncm depending on manufacturer specifications). This is the only screw tightened during this test phase. The framework is now fixed at one point only.',
      },
      {
        title: 'Evaluate All Other Positions',
        content:
          'Systematically examine every non-torqued implant-framework interface. Using your explorer, probe the junction between the framework and each implant platform. Under magnification, assess for any visible vertical gap, angular lift, or horizontal displacement.',
      },
      {
        title: 'Interpret Your Findings',
        content:
          'True passive fit means zero detectable gap at any non-torqued position. The explorer should not catch or pass between the framework and implant. Under magnification, interfaces should appear as continuous contacts with no light transmission through potential gaps.',
      },
      {
        title: 'Repeat from Opposite Side',
        content:
          'Release the torqued screw and repeat the test using the opposite distal implant as the reference point. This evaluates the framework from a different anchor position. Consistent results from both directions confirm accuracy; inconsistent results indicate complex distortion.',
      },
      {
        title: 'Optional: Test from Anterior Position',
        content:
          'For comprehensive evaluation, perform an additional test with torque applied to an anterior implant. This configuration stresses the framework differently and may reveal discrepancies missed by posterior-anchored testing.',
      },
    ],
    tips: [
      'Use magnification for all interface evaluation—the naked eye cannot reliably detect clinically significant gaps',
      'Perform the test before any occlusal adjustment; modifying the framework after discovering misfit is preferable',
      'Document which positions pass or fail for laboratory communication',
      'Consider radiographic verification as an adjunct to clinical examination',
    ],
    mistakes: [
      {
        title: 'Tightening multiple screws',
        content:
          'Each additional screw draws the framework into position, masking misfit. Only one screw may be tightened during Sheffield testing.',
      },
      {
        title: 'Inadequate magnification',
        content:
          'Gaps under 100 microns are clinically significant but invisible to the naked eye. Use loupes or microscope.',
      },
      {
        title: 'Accepting "close" fit',
        content:
          'Any detectable gap indicates misfit. Passive means zero perceivable gap, not "minimal" gap.',
      },
    ],
    instaBarHelps: `Insta-Bar verification jigs provide the ideal platform for Sheffield testing before framework fabrication. By verifying master cast accuracy with a Sheffield test on the Insta-Bar jig, you confirm that your working cast will produce a passive framework. The metal jig's absolute rigidity ensures that test results reflect true positional accuracy, not jig deformation. Catching errors at the jig stage prevents framework remakes.`,
  },

  'avoid-shrinkage': {
    overview: `Polymerization shrinkage is the invisible saboteur of full arch implant accuracy. When pattern resin cures, it contracts by 6-7%, pulling impression copings out of their true positions. Across a full arch span of 50mm, this translates to 3-3.5mm of cumulative positional error—far exceeding the sub-100-micron tolerance required for passive framework fit. Understanding shrinkage mechanisms enables you to either compensate for them or eliminate them entirely.`,
    whatYouNeed: [
      'Understanding of resin polymerization chemistry',
      'Sectioning disc and slow-speed handpiece (for compensation technique)',
      'Low-shrinkage reluting resin',
      'Metal verification jig system (for elimination approach)',
      'Alternatively: light-cured composite with lower shrinkage characteristics',
    ],
    steps: [
      {
        title: 'Understand the Shrinkage Mechanism',
        content:
          'Pattern resins polymerize through free radical chain reaction, converting monomer molecules to polymer chains. This conversion increases molecular density, reducing volume. The shrinkage is volumetric and directional—it pulls toward the center of the resin mass, displacing anything embedded within it.',
      },
      {
        title: 'Recognize the Clinical Impact',
        content:
          'In splinting applications, shrinkage vectors pull impression copings toward each other, reducing inter-implant distances. The effect compounds across multiple fixtures. A four-implant span might show 1-2mm total convergence; six or eight implants fare worse. This shrinkage directly transfers to the master cast as positional error.',
      },
      {
        title: 'Compensation Approach: Incremental Application',
        content:
          'Apply resin in small increments rather than bulk masses. Smaller volumes produce smaller absolute shrinkage. Allow each increment to polymerize completely before adding the next. This distributes shrinkage across multiple vectors rather than concentrating it in one direction.',
      },
      {
        title: 'Compensation Approach: Section and Relute',
        content:
          'After the splint fully polymerizes, cut completely through the resin between each coping pair. This releases the shrinkage stress and allows each segment to assume its true position relative to the underlying coping. Rejoin the sections with fresh resin, using minimal material.',
      },
      {
        title: 'Compensation Approach: Material Selection',
        content:
          'Consider resins marketed as "low-shrinkage" formulations, though understand that even these products still shrink 3-4%. Light-cured composites generally exhibit less shrinkage than self-curing acrylics. Some practitioners use bis-acrylic materials designed for provisional crowns.',
      },
      {
        title: 'Elimination Approach: Use Metal',
        content:
          'The only way to truly eliminate polymerization shrinkage is to remove polymerizing materials from the equation. Prefabricated metal verification systems like Insta-Bar use stainless steel links that undergo zero dimensional change. What you connect is what you get—no shrinkage compensation technique required.',
      },
      {
        title: 'Verify Your Compensation Success',
        content:
          'Regardless of approach, always verify the final result. Use the Sheffield test to confirm your master cast accuracy. If gaps appear, your shrinkage compensation was insufficient. With metal systems, verification confirms component seating rather than shrinkage management.',
      },
    ],
    tips: [
      'Allow 24 hours for complete resin polymerization when maximum accuracy is critical',
      'Temperature affects shrinkage rate—warmer environments accelerate curing and may increase shrinkage',
      'Practice your section-relute technique on models before clinical application',
      'Consider the time investment: compensation techniques can add 20+ minutes per case',
    ],
    mistakes: [
      {
        title: 'Believing "low-shrinkage" claims eliminate the problem',
        content:
          'Even reduced-shrinkage materials still contract significantly. Compensation or elimination remains necessary.',
      },
      {
        title: 'Incomplete sectioning',
        content:
          'Cuts must pass completely through the resin to release shrinkage vectors. Partial cuts leave residual stress.',
      },
      {
        title: 'Rushing the relute cure',
        content:
          'Applying load or taking impressions before relute material fully cures introduces secondary shrinkage error.',
      },
    ],
    instaBarHelps: `Insta-Bar represents the definitive solution to polymerization shrinkage: elimination rather than compensation. Stainless steel links physically cannot shrink. The dimensional stability of metal means that implant positions captured with Insta-Bar reflect true intraoral spatial relationships with zero shrinkage-induced error. This eliminates the technique sensitivity of resin splinting while dramatically reducing chair time.`,
  },

  'section-relute': {
    overview: `Section and relute is the essential technique for rescuing resin verification jigs from polymerization shrinkage distortion. By cutting through the cured splint and rejoining the sections, you break the continuous shrinkage vector and allow each implant position to return to its true location. This technique transforms a dimensionally compromised jig into an acceptably accurate verification tool, though it requires meticulous execution.`,
    whatYouNeed: [
      'Cured resin verification jig',
      'Thin sectioning disc (0.2-0.3mm thickness)',
      'Slow-speed straight handpiece',
      'Fresh pattern resin for reluting',
      'Mixing pad and spatula',
      'Protective eyewear and mask',
    ],
    steps: [
      {
        title: 'Confirm Complete Initial Cure',
        content:
          'Verify that the original resin splint has fully polymerized. The surface should be completely hard with no tackiness. Incomplete cure means active shrinkage continues—sectioning too early releases some but not all shrinkage stress. Wait the full manufacturer-recommended time, or ideally 10-15 minutes beyond.',
      },
      {
        title: 'Plan Your Section Locations',
        content:
          'Identify the midpoint between each adjacent coping pair. Mark these locations with a pencil or marker. You will make one complete cut between each coping pair. For four copings, you need three cuts; for six copings, five cuts. Ensure cuts will not damage the copings themselves.',
      },
      {
        title: 'Stabilize the Jig',
        content:
          'Seat the verification jig on the implants (or master cast analogs) and hand-tighten one coping. This stabilizes the jig during cutting and maintains orientation. The coping closest to your first cut should be the one secured.',
      },
      {
        title: 'Make the First Section Cut',
        content:
          'Using a thin sectioning disc, cut completely through the resin at your marked location. Apply light pressure and let the disc do the work to minimize heat generation. The cut must pass entirely through the splint—verify visually that the sections are completely separated.',
      },
      {
        title: 'Observe the Gap',
        content:
          'After sectioning, the cut surfaces will have separated slightly. This gap represents the polymerization shrinkage that was pulling that coping out of position. The gap may be 0.5-2mm depending on span length and resin volume. This visible separation confirms shrinkage was present.',
      },
      {
        title: 'Relute the First Section',
        content:
          'Mix fresh pattern resin to a thin consistency. Apply a small amount to the cut surfaces and press together gently. Do not force the sections—allow them to approximate naturally while the resin flows into the gap. Use minimal material to reduce secondary shrinkage.',
      },
      {
        title: 'Allow Complete Relute Cure',
        content:
          'Wait for the relute material to fully polymerize before proceeding to the next section. Rushing this step introduces movement that distorts the connection. The relute volume is small, so cure time is faster than the original bulk application—but still allow full manufacturer-recommended time.',
      },
      {
        title: 'Repeat for All Sections',
        content:
          'Systematically section and relute each connection, working from one end to the other. Complete one relute before making the next section cut. This sequential approach maintains rigidity throughout the process and prevents gross distortion from multiple simultaneous cuts.',
      },
      {
        title: 'Final Verification',
        content:
          'After all sections are reluted and cured, perform the Sheffield test. The jig should now seat passively with no detectable gaps at any position. If gaps remain, the jig may need additional section-relute cycles or complete refabrication.',
      },
    ],
    tips: [
      'Use the thinnest disc that provides structural integrity—narrower kerf means less material to relute',
      'Cool the disc with air spray during cutting to prevent heat damage to adjacent resin',
      'Consider performing section-relute twice for maximum shrinkage compensation in critical cases',
      'Document the pre-section and post-section gap widths to understand your shrinkage patterns',
    ],
    mistakes: [
      {
        title: 'Incomplete sectioning',
        content:
          'Cuts must pass completely through. Any resin bridge maintains shrinkage stress and negates the compensation.',
      },
      {
        title: 'Excessive relute material',
        content:
          'Large volumes of relute resin create their own shrinkage problem. Use the minimum amount needed for connection.',
      },
      {
        title: 'Rushing between sections',
        content:
          'Each relute must fully cure before the next cut. Simultaneous mobile sections lead to gross positional error.',
      },
    ],
    instaBarHelps: `Insta-Bar eliminates the need for section-relute technique entirely. Metal links cannot shrink, so there is no shrinkage to compensate. The 20+ minutes spent on careful sectioning, reluting, and curing becomes 2 minutes of simple mechanical assembly. For practitioners who value time efficiency and technique-independent accuracy, metal verification systems remove section-relute from the workflow completely.`,
  },

  'transfer-master-cast': {
    overview: `Transferring implant positions to the master cast is where impression accuracy either translates to prosthetic success or falls apart. The master cast serves as the foundation for all laboratory work—framework design, milling, and finishing. Analog positions in the cast must mirror intraoral implant positions within micron-level tolerance. Every error introduced during transfer compounds in the final prosthesis.`,
    whatYouNeed: [
      'Accurate impression with embedded copings or verification jig',
      'Implant analogs corresponding to your system',
      'Type IV dental stone',
      'Rubber mixing bowl and spatula',
      'Vibrator for stone mixing',
      'Impression disinfectant',
      'Soft tissue simulation material (optional)',
    ],
    steps: [
      {
        title: 'Inspect the Impression or Jig',
        content:
          'Before transfer, verify impression integrity. Check that all copings remain securely embedded and rigidly splinted. Look for tears, pulls, or voids around coping bases. Confirm analog interface surfaces are clean and undamaged. Any defect here magnifies in the final cast.',
      },
      {
        title: 'Disinfect Without Distortion',
        content:
          'Spray or immerse the impression in manufacturer-approved disinfectant. Follow the contact time precisely—too short fails to disinfect, too long risks material degradation. Rinse thoroughly and gently air dry. Avoid harsh streams that could dislodge copings.',
      },
      {
        title: 'Attach Implant Analogs',
        content:
          'Thread analogs onto each impression coping, engaging the anti-rotational feature fully. Hand-tighten, then apply appropriate torque. The analog-coping junction must be absolutely gap-free. Use an explorer to verify seating—any space here transfers directly to the cast as positional error.',
      },
      {
        title: 'Box the Impression',
        content:
          'Create a containment boundary around the impression using boxing wax or a silicone mold frame. This defines your cast dimensions and prevents stone flow-out. Maintain at least 10mm clearance around all analogs to ensure adequate stone thickness for strength.',
      },
      {
        title: 'Mix Dental Stone',
        content:
          'Proportion Type IV dental stone according to manufacturer water/powder ratio. Mix under vacuum to eliminate air bubbles. The stone should be creamy without being runny. Overly wet stone weakens the final cast; overly dry stone traps air and creates voids.',
      },
      {
        title: 'Pour Initial Stone Layer',
        content:
          'Using a vibrator, flow stone carefully around each analog, filling the coping-analog interface completely. Build up slowly, avoiding air entrapment. This first layer captures the critical positional information—take your time here. Continue adding stone until analogs are fully submerged.',
      },
      {
        title: 'Complete the Pour',
        content:
          'Add remaining stone to achieve desired base thickness (minimum 15mm). Continue vibrating to release trapped air. Allow the stone to set undisturbed according to manufacturer recommendations—typically 45-60 minutes minimum for Type IV.',
      },
      {
        title: 'Separate and Inspect',
        content:
          'Gently separate the cast from the impression. Copings should remain in the impression; analogs should remain in the cast. Inspect each analog position for voids, bubbles, or defects. Verify analogs are firmly embedded with no movement. Clean stone particles from analog interfaces.',
      },
      {
        title: 'Verify Transfer Accuracy',
        content:
          'If a verification jig was used during impression, test it on the new master cast. The jig should seat passively with Sheffield testing showing no gaps. This confirms that the transfer preserved the original positional accuracy. Discrepancy indicates error during pouring—remake the cast.',
      },
    ],
    tips: [
      'Pour the cast within one hour of impression taking to minimize material relaxation',
      'Store poured casts in humid environments for the first 24 hours to ensure complete hydration',
      'Label casts immediately with patient name, date, and implant system',
      'Consider pouring duplicate casts for complex cases as insurance against damage',
    ],
    mistakes: [
      {
        title: 'Incomplete analog seating',
        content:
          'Gaps at the coping-analog interface create offset errors in the cast. Verify seating with explorer and magnification.',
      },
      {
        title: 'Air bubbles around analogs',
        content:
          'Voids at critical interfaces manifest as positional errors. Pour slowly with continuous vibration.',
      },
      {
        title: 'Premature separation',
        content:
          'Removing the cast before complete stone set risks distortion. Wait the full cure time.',
      },
    ],
    instaBarHelps: `When a master cast is poured from an impression made with Insta-Bar metal splinting, the analog positions reflect true clinical implant positions. The dimensional accuracy captured by metal links transfers through proper pouring technique to the final cast. After pouring, the same Insta-Bar jig can verify cast accuracy—if Sheffield testing passes on both patient and cast, fabrication can proceed with confidence.`,
  },

  'achieve-passive-fit': {
    overview: `Achieving passive fit in full arch implant prosthetics represents the culmination of every preceding step done correctly. A passively fitting framework seats without strain, distributes loads physiologically, and protects both implants and bone from damaging stress concentrations. The pathway to passive fit requires systematic attention to impression accuracy, cast verification, and framework design—with multiple checkpoints to catch errors before they become failures.`,
    whatYouNeed: [
      'Verified master cast with accurate analog positions',
      'Verification jig that passes Sheffield testing',
      'Clear communication pathway with laboratory',
      'Framework try-in appointment scheduling',
      'Sheffield test protocol and instruments',
    ],
    steps: [
      {
        title: 'Start with Accurate Impressions',
        content:
          'Passive fit begins at the impression stage. Use open-tray technique with rigidly splinted copings. If using resin splinting, perform meticulous section-relute technique. For guaranteed accuracy, use metal verification systems that eliminate polymerization shrinkage entirely. An inaccurate impression makes passive fit impossible regardless of subsequent efforts.',
      },
      {
        title: 'Verify Before Framework Fabrication',
        content:
          'Never send a cast for framework fabrication without verification. Use a verification jig to confirm master cast accuracy via Sheffield testing. The jig must seat on both patient and cast with zero gaps at any position. This verification step catches errors while correction is still economical.',
      },
      {
        title: 'Communicate Critical Information to Lab',
        content:
          'Provide your laboratory with implant system details, connection types, inter-implant distances, and verification results. Include the actual verification jig if possible for their independent confirmation. Specify that passive fit is mandatory, not aspirational.',
      },
      {
        title: 'Select Appropriate Framework Design',
        content:
          'Work with your laboratory to choose framework material and design that supports passive fit. Milled titanium or zirconia from accurate scans typically provides better passive fit than cast metal. Consider monolithic designs that eliminate assembly joints.',
      },
      {
        title: 'Request Framework Try-In Before Finishing',
        content:
          "Schedule a try-in appointment to evaluate framework fit before porcelain application or final finishing. It's far easier to adjust or remake a bare framework than a fully veneered prosthesis.",
      },
      {
        title: 'Perform Rigorous Sheffield Testing',
        content:
          'At framework try-in, test passive fit using the Sheffield protocol. Tighten only one distal screw and examine all other interfaces under magnification. Repeat from the opposite side. Any detectable gap indicates misfit. Do not accept "close" fit.',
      },
      {
        title: 'Address Misfit Systematically',
        content:
          'If Sheffield testing reveals gaps, determine the pattern. Consistent gaps suggest systematic master cast error—may require reimpressions. Localized gaps might be addressable through framework sectioning and laser welding.',
      },
      {
        title: 'Final Verification Before Delivery',
        content:
          'After any framework modification, repeat Sheffield testing to confirm correction achieved passive fit. On final prosthesis delivery, verify fit one final time before permanent attachment.',
      },
    ],
    tips: [
      'Build verification steps into your standard workflow, not as optional add-ons',
      'Train your team to recognize and flag potential accuracy problems early',
      'Develop a relationship with a laboratory that shares your commitment to passive fit',
      'Consider radiographic verification as an adjunct to clinical assessment in complex cases',
    ],
    mistakes: [
      {
        title: 'Skipping verification steps',
        content:
          'Each checkpoint exists because errors at that stage are common. Bypassing verification trades small time savings for large remake costs.',
      },
      {
        title: 'Accepting forced fit',
        content:
          'A framework that requires pressure to seat is not passively fitting. Forcing screws draws misfit frameworks onto implants, inducing harmful stresses.',
      },
      {
        title: 'Blaming the laboratory for impression errors',
        content:
          'Framework misfit often originates from inaccurate impressions. Verify your casts before assigning responsibility.',
      },
    ],
    instaBarHelps: `Insta-Bar provides the rigidity and dimensional stability essential for accurate verification at every stage. From initial impression splinting through final cast verification, the metal construction eliminates shrinkage variables that compromise resin-based techniques. The clear pass/fail results from Sheffield testing with Insta-Bar enable confident decision-making—proceed with fabrication when the jig passes, reimpression when it fails.`,
  },

  'avoid-remakes': {
    overview: `Full arch prosthetic remakes represent devastating setbacks—thousands in laboratory costs, multiple patient appointments, damaged professional reputation, and weeks of delay. Yet most remakes trace back to preventable errors in impression accuracy and verification. Understanding the common failure modes and implementing systematic checkpoints transforms remake risk from inevitable probability to rare exception.`,
    whatYouNeed: [
      'Verification jig (preferably metal)',
      'Sheffield testing protocol and instruments',
      'Documentation system for tracking verification results',
      'Reliable laboratory partnership with communication protocols',
      'Commitment to never skip verification steps',
    ],
    steps: [
      {
        title: 'Identify Common Remake Causes',
        content:
          'Most full arch remakes result from: inaccurate impressions due to splinting shrinkage, master cast errors from impression transfer, design miscommunication with laboratory, or manufacturing defects in framework fabrication. Understanding these categories helps target prevention efforts.',
      },
      {
        title: 'Implement Mandatory Verification Protocol',
        content:
          'Establish a non-negotiable policy: no framework fabrication without verified master cast accuracy. Create a checklist that requires verification jig testing and documentation before laboratory submission.',
      },
      {
        title: 'Invest in Reliable Verification Tools',
        content:
          'The verification jig itself must be trustworthy. Resin jigs that flex under torque provide false verification. Metal verification systems like Insta-Bar deliver consistent, reliable results that support confident decision-making.',
      },
      {
        title: 'Master Sheffield Testing Technique',
        content:
          'Ensure everyone involved in framework try-in understands and correctly performs the Sheffield test. Single-screw testing is the only method that reveals true fit. Train assistants to set up properly and recognize pass/fail results.',
      },
      {
        title: 'Establish Clear Laboratory Communication',
        content:
          'Document and communicate all critical case information: implant system, platform type, inter-implant distances, verification results, and fit requirements. Require laboratory acknowledgment of specifications.',
      },
      {
        title: 'Schedule Framework Try-In Appointments',
        content:
          'Build try-in visits into your full arch workflow before final prosthesis completion. Evaluate bare frameworks with Sheffield testing before porcelain application.',
      },
      {
        title: 'Investigate All Framework Failures',
        content:
          "When a framework doesn't fit, determine why before proceeding. Was the master cast accurate? Did the laboratory follow specifications? Is the framework defective? Remaking without understanding the cause risks repeating the same error.",
      },
      {
        title: 'Track and Analyze Your Remake Rate',
        content:
          'Monitor your full arch cases for remake frequency and causes. Identify patterns that suggest systemic problems. A 15% remake rate indicates workflow issues requiring intervention. A 2% rate represents acceptable clinical reality.',
      },
    ],
    tips: [
      'Consider the cost of verification (time + materials) as insurance premium against remake costs',
      'Build verification time into case scheduling rather than treating it as an afterthought',
      'Photograph verification jig fit for documentation and laboratory communication',
      'Develop relationships with laboratories that prioritize passive fit as much as you do',
    ],
    mistakes: [
      {
        title: 'Proceeding without verification',
        content:
          'The most expensive shortcut in dentistry. Every skipped verification is a gamble with thousands of dollars.',
      },
      {
        title: 'Accepting "good enough" fit',
        content:
          'Compromise at try-in becomes failure at delivery. Passive means zero detectable gap—not "minimal" gap.',
      },
      {
        title: 'Assuming laboratory omniscience',
        content:
          'Laboratories work from the information you provide. Incomplete communication produces incorrect results.',
      },
    ],
    instaBarHelps: `Insta-Bar addresses the primary remake driver: polymerization shrinkage during impression splinting. By providing metal links that cannot shrink, Insta-Bar eliminates the most common accuracy failure mode. The rigid construction delivers unambiguous Sheffield test results—gaps indicate true positional error, not jig flex. Systematic use of Insta-Bar verification can reduce remake rates from double digits to near zero.`,
  },

  // ============================================================
  // ALL-ON-X PROTOCOLS (3)
  // ============================================================

  'all-on-4-impression': {
    overview: `The All-on-4 concept revolutionized full arch rehabilitation by maximizing bone utilization with angled posterior implants. However, this efficiency creates unique impression challenges: tilted implants require angulated abutments, multi-unit connections add potential error points, and the four-implant configuration means each fixture carries significant prosthetic load—making positional accuracy even more critical than in conventional cases.`,
    whatYouNeed: [
      'Multi-unit impression copings compatible with your implant system',
      'Open-tray custom impression tray with adequate clearance',
      'Splinting material (resin or metal verification jig)',
      'Polyvinyl siloxane (PVS) or polyether impression material',
      'Torque wrench with appropriate hex drivers',
      'Multi-unit analogs for master cast fabrication',
    ],
    steps: [
      {
        title: 'Assess Multi-Unit Abutment Status',
        content:
          'With the prosthesis removed, examine each multi-unit abutment for damage, debris, or loosening. Verify abutment torque before proceeding—loose abutments shift during impression, corrupting positional data. Clean all abutment interfaces with chlorhexidine and dry thoroughly.',
      },
      {
        title: 'Select Appropriate Impression Copings',
        content:
          'Use impression copings designed for your specific multi-unit abutment system. These copings must engage the anti-rotational feature and seat completely flush. Verify compatibility—mismatched components create apparent positional errors.',
      },
      {
        title: 'Seat Impression Copings',
        content:
          'Thread copings onto all four multi-unit abutments. Hand-tighten, then apply recommended torque (typically 10-15 Ncm). Verify seating by probing the coping-abutment junction—zero gap should be detectable.',
      },
      {
        title: 'Establish Rigid Splinting',
        content:
          'Connect all four copings with rigid splinting material. For resin splinting, apply pattern resin with floss scaffold, allow complete cure, then section and relute between each coping pair. For metal splinting, assemble verification jig links between copings per manufacturer protocol.',
      },
      {
        title: 'Evaluate Splint Configuration',
        content:
          'The splint must resist torsion and flexion during impression removal. All-on-4 configurations stress splints differently than conventional parallel implant setups—the angled posterior implants create rotational forces during unscrewing.',
      },
      {
        title: 'Prepare Custom Open Tray',
        content:
          'Try-in your custom tray over the splinted assembly. Verify clearance around each coping access hole (minimum 2mm). The tray must not contact the splint or copings. Apply tray adhesive and allow to dry completely.',
      },
      {
        title: 'Take the Impression',
        content:
          'Syringe light-body material around each coping, ensuring complete coverage of the coping-abutment interface. Load the tray with heavy-body material. Seat with even pressure and maintain stability throughout setting.',
      },
      {
        title: 'Remove Impression Carefully',
        content:
          'Unscrew each coping through the tray access holes using appropriate hex drivers. Break torque smoothly to avoid rotating copings within the impression material. Remove the tray in the path of draw. All four copings should remain embedded and rigidly connected.',
      },
      {
        title: 'Inspect and Attach Analogs',
        content:
          'Examine the impression for defects, particularly around coping bases. Thread multi-unit analogs onto each coping and torque to specification. Verify analog seating—gaps here directly transfer to the master cast.',
      },
    ],
    tips: [
      'Use multi-unit level impression when possible; implant-level impressions through angled multi-units add complexity',
      'Allow extra cure time for impression material near angled posterior copings where material thickness varies',
      'Photograph the clinical setup for laboratory reference on angulation and emergence',
      'Communicate posterior implant angles to the laboratory for optimal framework design',
    ],
    mistakes: [
      {
        title: 'Using closed-tray technique',
        content:
          'All-on-4 cases require open-tray pickup to maintain spatial accuracy. Closed-tray cannot accommodate angulated copings accurately.',
      },
      {
        title: 'Insufficient splint rigidity',
        content:
          'The rotational forces from angled implants stress splints significantly. Inadequate rigidity allows coping movement during removal.',
      },
      {
        title: 'Ignoring multi-unit abutment torque',
        content:
          'Loose abutments shift during impression, creating apparent implant positional error. Verify torque before every impression.',
      },
    ],
    instaBarHelps: `Insta-Bar is particularly valuable for All-on-4 cases where the consequences of impression error are magnified by the four-implant load distribution. Metal links provide the rigidity needed to resist the torsional forces generated when unscrewing angled posterior copings. Zero polymerization shrinkage means tilted implant positions are captured accurately without the distortion that resin splinting introduces.`,
  },

  'all-on-x-verification': {
    overview: `All-on-X configurations—whether four, five, six, or more implants supporting a full arch prosthesis—demand rigorous position verification before framework fabrication. The increasing complexity of multi-implant arrays means small positional errors compound exponentially. A framework designed for six incorrectly positioned analogs has six opportunities for misfit.`,
    whatYouNeed: [
      'Verification jig (resin or metal) representing your master cast',
      'Hex drivers compatible with your prosthetic components',
      'Calibrated torque wrench',
      'Dental explorer and magnification',
      'Articulating paper or fit checking material',
      'Documentation forms for verification records',
    ],
    steps: [
      {
        title: 'Assess the Verification Jig',
        content:
          'Examine your verification jig for damage, distortion, or contamination. Resin jigs may deform over time; metal jigs may have loosened connections. Clean all coping interfaces with isopropyl alcohol.',
      },
      {
        title: 'Prepare the Patient',
        content:
          'Remove the existing prosthesis and clean all implant or multi-unit abutment interfaces. Debris mimics positional discrepancy. Verify that all abutments are properly torqued and stable.',
      },
      {
        title: 'Seat the Verification Jig',
        content:
          'Place the jig over the implants/abutments and allow it to settle passively without any screw engagement. All copings should engage their implant connections simultaneously.',
      },
      {
        title: 'Perform Sheffield Testing - First Position',
        content:
          'Select the most distal implant on one side. Thread and fully torque the prosthetic screw at this single position only. Examine every other implant-coping interface for gaps using explorer and magnification.',
      },
      {
        title: 'Evaluate Gap Patterns',
        content:
          'A truly accurate system shows zero detectable gap at any non-torqued position. Gaps at multiple positions suggest systematic master cast error. A gap at one position only might indicate localized analog misposition.',
      },
      {
        title: 'Release and Repeat - Opposite Side',
        content:
          'Remove torque from the first position. Select the most distal implant on the opposite side and apply torque. Repeat interface examination.',
      },
      {
        title: 'Test from Anterior Position',
        content:
          'For comprehensive verification, repeat the Sheffield test with torque applied to an anterior implant. This configuration stresses the jig differently.',
      },
      {
        title: 'Apply Disclosing Medium',
        content:
          'For subtle discrepancies, apply fit checking material to all coping interfaces. Seat the jig, tighten one screw, and allow to set. Examine contact patterns.',
      },
      {
        title: 'Compare to Master Cast',
        content:
          'Perform identical Sheffield testing with the verification jig on your master cast. The fit should match clinical findings.',
      },
      {
        title: 'Document and Decide',
        content:
          'Record all verification findings. If the jig passes clinical Sheffield testing and fits identically on the master cast, proceed to framework fabrication.',
      },
    ],
    tips: [
      'Perform verification at a dedicated appointment rather than squeezing it into other procedures',
      'Use the same torque values consistently across all testing for comparable results',
      'Consider photographic documentation of verification results',
      'When in doubt, verify twice—the cost of double-checking is trivial compared to framework failure',
    ],
    mistakes: [
      {
        title: 'Tightening multiple screws',
        content:
          'Each additional screw draws the jig toward seating, masking misfit. Only one screw may be engaged during Sheffield testing.',
      },
      {
        title: 'Skipping the master cast comparison',
        content:
          "Clinical fit alone doesn't confirm cast accuracy. The jig must fit both patient and cast identically.",
      },
      {
        title: 'Proceeding despite marginal results',
        content:
          '"Almost passive" fit becomes framework misfit. Demand zero detectable gaps before authorizing fabrication.',
      },
    ],
    instaBarHelps: `Insta-Bar provides the rigid, dimensionally stable platform essential for accurate All-on-X verification. Metal construction eliminates the flex that compromises resin jig reliability, ensuring that test results reflect true positional accuracy. When Insta-Bar shows a gap, you can trust it represents real discrepancy, not jig deformation.`,
  },

  'open-tray-technique': {
    overview: `Open tray, or pick-up, impression technique is the only acceptable method for multi-implant full arch cases. Unlike closed tray technique where copings return to the mouth after impression removal, open tray copings remain embedded in the impression material, maintaining their precise spatial relationships during analog attachment.`,
    whatYouNeed: [
      'Open tray impression copings for your implant system',
      'Custom impression tray with access holes for each coping',
      'Rigorous splinting system (resin with section-relute or metal jig)',
      'Polyvinyl siloxane or polyether impression material',
      'Tray adhesive compatible with your impression material',
      'Hex drivers and calibrated torque wrench',
    ],
    steps: [
      {
        title: 'Understand Why Open Tray Is Essential',
        content:
          'Closed tray technique requires copings to retract through set impression material, then reseat into their impressions. With four or more implants, these errors compound to produce frameworks that cannot seat passively.',
      },
      {
        title: 'Design the Custom Tray',
        content:
          'Fabricate an acrylic custom tray from a preliminary impression. Create access holes over each implant position (typically 8-10mm diameter). Verify adequate material thickness for rigidity.',
      },
      {
        title: 'Try-In and Adjust',
        content:
          'Seat the custom tray over connected impression copings before splinting. Verify that each hole aligns with its coping and provides adequate clearance.',
      },
      {
        title: 'Seat and Torque Impression Copings',
        content:
          'Thread impression copings onto each implant, ensuring anti-rotational feature engagement. Hand-tighten, then apply specified torque.',
      },
      {
        title: 'Establish Rigid Splinting',
        content:
          'Connect all copings with rigid splinting material. For resin technique, apply pattern resin over floss scaffold, cure completely, section between each coping pair, and relute. For metal technique, assemble prefabricated links.',
      },
      {
        title: 'Apply Tray Adhesive',
        content:
          'Paint tray adhesive on all internal surfaces and allow to dry per manufacturer instructions.',
      },
      {
        title: 'Inject Light-Body Material',
        content:
          'Syringe light-body impression material around each coping, ensuring complete coverage of the coping-implant interface.',
      },
      {
        title: 'Load and Seat the Tray',
        content:
          'Fill the custom tray with heavy-body impression material. Seat with firm, even pressure. Verify each coping screw head is accessible.',
      },
      {
        title: 'Unscrew Through Access Holes',
        content:
          'Once material is fully set, unscrew each impression coping through the tray access holes. Break torque smoothly.',
      },
      {
        title: 'Remove and Verify',
        content:
          'Lift the tray straight up. All copings should remain embedded and rigidly connected. Inspect for tears, voids, or pulls.',
      },
    ],
    tips: [
      "Create a tray with excess height to ensure access hole positioning doesn't compromise material thickness",
      'Use guide pins during tray fabrication to precisely locate access holes',
      'Allow 30 seconds beyond manufacturer setting time before unscrewing',
      'Photograph the completed impression for laboratory reference',
    ],
    mistakes: [
      {
        title: 'Inadequate access hole size',
        content:
          'Holes must accommodate both coping and hex driver. Restrictive holes force angled driver engagement, creating rotational force.',
      },
      {
        title: 'Flexible or thin custom trays',
        content:
          'The tray must resist removal forces without distorting. Inadequate rigidity allows tray deformation.',
      },
      {
        title: 'Premature screw removal',
        content:
          'Beginning unscrewing before impression material is fully set allows coping movement within still-plastic material.',
      },
    ],
    instaBarHelps: `Open tray technique with Insta-Bar metal splinting represents the gold standard for multi-implant impressions. The rigid stainless steel links maintain absolute coping positions throughout impression removal, eliminating the flex and shrinkage concerns of resin splinting. The mechanical simplicity of metal assembly also reduces chair time.`,
  },

  // ============================================================
  // DIGITAL WORKFLOW (3)
  // ============================================================

  'scan-full-arch': {
    overview: `Intraoral scanning has transformed single-unit and short-span implant workflows, but full arch implant cases remain challenging for digital impressions. Scanner accuracy degrades over long spans as registration errors accumulate, and the featureless geometry of scan bodies provides limited stitching references. Understanding both the capabilities and limitations of digital impressions enables appropriate application.`,
    whatYouNeed: [
      'Intraoral scanner with implant workflow capability',
      'Scan bodies compatible with your implant system',
      'Scan body driver or insertion tool',
      'Calibrated scanner tip',
      'Anti-reflective scanning spray (if required by your system)',
      'Clean, dry operative field',
    ],
    steps: [
      {
        title: 'Assess Scanner Suitability',
        content:
          'Evaluate whether your scanner and clinical situation support accurate full arch implant scanning. Factors affecting accuracy include scanner technology, arch span, number of implants, and operator proficiency.',
      },
      {
        title: 'Select Appropriate Scan Bodies',
        content:
          'Use scan bodies designed for your specific implant system and scanner combination. Scan body geometry significantly impacts registration accuracy—larger bodies with distinct asymmetric features provide better software recognition.',
      },
      {
        title: 'Prepare the Scan Bodies',
        content:
          'Clean scan bodies with isopropyl alcohol and inspect for scratches or damage. Some scan bodies require anti-reflective coating; apply evenly if indicated.',
      },
      {
        title: 'Seat Scan Bodies',
        content:
          'Thread scan bodies onto each implant or multi-unit abutment. Hand-tighten, then apply recommended torque. Verify complete seating.',
      },
      {
        title: 'Establish Scanning Strategy',
        content:
          'Plan your scanning path before beginning. Full arch protocols typically recommend starting from one posterior quadrant, progressing through the anterior, and completing in the opposite posterior.',
      },
      {
        title: 'Capture Adjacent Anatomy First',
        content:
          "Before scanning the scan bodies themselves, capture surrounding tissue and teeth. This provides the scanner's algorithm with geometric features for accurate registration.",
      },
      {
        title: 'Scan the Implant Region',
        content:
          'Scan each scan body with its surrounding anatomy. Capture the full 360-degree geometry. Maintain overlap between scan regions for algorithm registration.',
      },
      {
        title: 'Evaluate Scan Quality',
        content:
          "Review your scanning software's confidence maps or quality scores. Examine areas between distant implants particularly carefully—this is where cumulative error is greatest.",
      },
      {
        title: 'Consider Verification Requirements',
        content:
          'Recognize that digital impressions of full arch implants carry inherent accuracy limitations. For cases demanding guaranteed passive fit, plan to verify digital accuracy with physical methods.',
      },
    ],
    tips: [
      'Scan during sessions when the patient can maintain a stable, dry field',
      'Consider sectional scanning with fiducial markers for very long spans',
      'Compare scan data to previous records if available to identify gross errors',
      'Maintain scanner calibration according to manufacturer schedules',
    ],
    mistakes: [
      {
        title: 'Overconfidence in digital accuracy',
        content:
          "Current IOS technology has limitations for full arch spans. Understand your scanner's accuracy envelope.",
      },
      {
        title: 'Skipping physical verification',
        content:
          'Digital scans can contain errors invisible in the data. Physical verification catches what software misses.',
      },
      {
        title: 'Using incompatible components',
        content:
          'Scan body-scanner combinations affect accuracy. Verify compatibility before clinical use.',
      },
    ],
    instaBarHelps: `Insta-Bar provides the physical verification that digital workflows lack. After scanning, fabricate a verification jig from the digital data and test it clinically. If the Insta-Bar-based jig passes Sheffield testing, your digital impression is accurate. If gaps appear, you've caught the error before framework fabrication.`,
  },

  'verify-digital-accuracy': {
    overview: `Digital impressions offer efficiency and patient comfort, but full arch implant scans harbor accuracy risks that aren't visible in the data itself. Registration errors accumulate across long spans, and the software may report confidence while containing clinically significant positional error. Verification protocols bridge the gap between digital convenience and physical reality.`,
    whatYouNeed: [
      'Completed digital scan data',
      'Physical verification jig (from scan data or independently fabricated)',
      'Sheffield test protocol and instruments',
      'Access to 3D printing or milling from scan data',
      'Hex drivers and calibrated torque wrench',
      'Documentation system for verification records',
    ],
    steps: [
      {
        title: 'Understand Scan Limitations',
        content:
          'Intraoral scanners accumulate error over distance. A scan accurate at 10mm spans may show significant deviation at 50mm spans. Physical verification reveals what the digital file cannot show.',
      },
      {
        title: 'Assess Software Quality Indicators',
        content:
          "Review your scanning software's confidence maps and quality scores. Low-confidence regions suggest data unreliability.",
      },
      {
        title: 'Compare to Reference Data',
        content:
          'If previous scans exist, compare for gross discrepancies. Sudden changes in inter-implant distances indicate scan error.',
      },
      {
        title: 'Generate Physical Verification Model',
        content:
          'Export scan data and produce a physical model with implant analogs. Use high-accuracy 3D printing or milling.',
      },
      {
        title: 'Fabricate or Obtain Verification Jig',
        content:
          'Create a verification jig that fits the digital model accurately. This can be 3D printed, milled, or assembled using metal components like Insta-Bar.',
      },
      {
        title: 'Clinical Sheffield Testing',
        content:
          'Bring the verification jig to the patient. Perform standard Sheffield testing. The jig should fit clinically exactly as it fits the scan-derived model.',
      },
      {
        title: 'Interpret Discrepancies',
        content:
          "If Sheffield testing reveals gaps clinically that weren't present on the model, the digital scan does not accurately represent intraoral positions.",
      },
      {
        title: 'Document Verification Results',
        content:
          'Record verification findings. This documentation supports clinical decisions about proceeding with digital data or converting to conventional workflow.',
      },
      {
        title: 'Decision Point',
        content:
          'Verified accurate scans support confident framework fabrication. Failed verification requires intervention: rescan, take conventional impressions, or implement hybrid protocols.',
      },
    ],
    tips: [
      'Build verification into your digital implant workflow rather than treating it as optional',
      'Use the same verification jig to test both the scan-derived model and the final master cast',
      'Consider independent verification for high-value cases regardless of software confidence',
      'Track your verification pass/fail rates to understand your digital workflow reliability',
    ],
    mistakes: [
      {
        title: 'Trusting software confidence blindly',
        content:
          'Quality scores evaluate internal consistency, not absolute accuracy. Physical verification tests reality.',
      },
      {
        title: 'Skipping verification for "straightforward" cases',
        content:
          'Long spans and multiple implants challenge all scanners. Complexity increases verification importance.',
      },
      {
        title: 'Using low-accuracy verification methods',
        content:
          'Flexible resin jigs can pass on inaccurate models. Metal jigs provide unambiguous pass/fail results.',
      },
    ],
    instaBarHelps: `Insta-Bar provides the physical truth test for digital impressions. A verification jig assembled from Insta-Bar components offers rigid, dimensionally stable testing that reveals scan accuracy unambiguously. When Insta-Bar passes Sheffield testing clinically but gaps appear on the scan-derived model, you've identified digital accuracy failure before framework fabrication.`,
  },

  'ios-jig-combo': {
    overview: `Hybrid workflows combine the efficiency of intraoral scanning with the accuracy assurance of physical verification jigs. This approach leverages digital capabilities for design and communication while using metal verification to catch positional errors that scanners may introduce across full arch spans.`,
    whatYouNeed: [
      'Intraoral scanner with implant scanning capability',
      'Scan bodies compatible with your system',
      'Metal verification jig (Insta-Bar or equivalent)',
      'Sheffield test instruments and protocol',
      'Digital design software or laboratory with digital capabilities',
      'Communication pathway for digital file transfer',
    ],
    steps: [
      {
        title: 'Determine Workflow Strategy',
        content:
          'Decide whether to use digital data as primary with physical verification, or physical impression as primary with digital design overlay. Most hybrid protocols use digital scanning for efficiency with physical verification as the accuracy checkpoint.',
      },
      {
        title: 'Complete Digital Scan',
        content:
          'Perform a full arch implant scan using scan bodies. Follow established scanning protocol and export the scan data.',
      },
      {
        title: 'Fabricate Physical Verification Jig',
        content:
          "Simultaneously, assemble a metal verification jig directly in the patient's mouth. Using Insta-Bar or similar metal components, connect all implants with rigid links.",
      },
      {
        title: 'Clinical Sheffield Test with Metal Jig',
        content:
          'Perform Sheffield testing with the metal verification jig. A passing metal jig confirms that you have a reference standard for implant positions.',
      },
      {
        title: 'Generate Model from Digital Data',
        content:
          'Have your laboratory create a physical model from the scan data, with analogs positioned according to the digital impression.',
      },
      {
        title: 'Test Metal Jig on Digital Model',
        content:
          'Place the same metal verification jig that passed clinical testing onto the scan-derived model. Perform Sheffield testing. The jig should fit the model identically.',
      },
      {
        title: 'Interpret Comparison Results',
        content:
          'If the metal jig fits both patient and scan-derived model passively, the digital data is accurate—proceed confidently. If gaps appear on the model, the scan contains error.',
      },
      {
        title: 'Address Scan Discrepancies',
        content:
          'For failed digital verification, options include: rescanning, using the physical jig to create a conventional impression, or adjusting the digital model to match verified positions.',
      },
      {
        title: 'Framework Design and Fabrication',
        content:
          'With verified accurate data, proceed to framework design. The verification investment ensures design work proceeds on accurate positional data.',
      },
      {
        title: 'Final Framework Verification',
        content:
          'At framework try-in, repeat Sheffield testing. The framework should fit as well as the verification jig did.',
      },
    ],
    tips: [
      'Use the same metal jig throughout the case as your consistent reference standard',
      'Photograph jig fit on both patient and model for documentation',
      'Build hybrid verification into scheduling—it adds modest time but prevents major delays',
      'Communicate the hybrid approach to your laboratory so they understand the verification checkpoint',
    ],
    mistakes: [
      {
        title: 'Assuming digital and physical will always agree',
        content:
          "The hybrid approach exists because they often don't. Verification catches discrepancies.",
      },
      {
        title: 'Using flexible verification jigs',
        content:
          'Resin jigs may flex to fit both patient and model despite positional error. Metal jigs provide definitive pass/fail.',
      },
      {
        title: 'Skipping the model verification step',
        content:
          "Clinical jig fit alone doesn't verify scan accuracy. The jig must also fit the scan-derived model.",
      },
    ],
    instaBarHelps: `Insta-Bar is the ideal verification component for hybrid workflows. Its rigid metal construction provides the unambiguous reference standard needed to test digital accuracy. When Insta-Bar fits both patient and model identically, you have verified digital accuracy. The reusable stainless steel links make verification economical across multiple cases.`,
  },

  // ============================================================
  // LAB PROTOCOLS (4)
  // ============================================================

  'pour-master-cast': {
    overview: `Pouring the master cast is where impression accuracy either transfers faithfully to the working model or degrades into positional error. The master cast serves as the foundation for all framework design and fabrication—analog positions in stone must exactly mirror clinical implant positions. Proper stone selection, mixing technique, and pouring protocol preserve the accuracy achieved during impression taking.`,
    whatYouNeed: [
      'Verified impression with embedded copings and splint',
      'Implant analogs compatible with your system',
      'Type IV dental stone (high-strength, low-expansion)',
      'Vacuum mixer and mixing bowl',
      'Vibrator for bubble elimination',
      'Boxing wax or silicone mold frame',
      'Calibrated scale and graduated cylinder',
    ],
    steps: [
      {
        title: 'Verify Impression Integrity',
        content:
          'Before pouring, inspect the impression. Confirm all copings remain embedded and rigidly splinted. Check for tears, pulls, or distortion around coping bases.',
      },
      {
        title: 'Attach Implant Analogs',
        content:
          'Thread analogs onto each embedded impression coping. Engage the anti-rotational feature fully and apply specified torque. Verify absolute seating with an explorer.',
      },
      {
        title: 'Box the Impression',
        content:
          'Create a containment boundary using boxing wax or a silicone mold form. Provide at least 10mm clearance around all analogs and extend 15-20mm below the deepest analog point.',
      },
      {
        title: 'Select Appropriate Stone',
        content:
          'Use Type IV dental stone for implant master casts. This material offers the best combination of accuracy, strength, and dimensional stability.',
      },
      {
        title: 'Proportion Accurately',
        content:
          "Weigh powder and measure water according to manufacturer's exact specifications. Water/powder ratio directly affects setting expansion and final strength.",
      },
      {
        title: 'Mix Under Vacuum',
        content:
          'Combine water and powder in a clean mixing bowl. Mix under vacuum to eliminate air incorporation. The final mix should be smooth and creamy.',
      },
      {
        title: 'Pour Initial Increment',
        content:
          'Place the impression on a vibrator. Flow stone carefully around each analog, filling the coping-analog interface completely. Build up slowly, avoiding air entrapment.',
      },
      {
        title: 'Complete the Pour',
        content:
          'Add remaining stone to achieve desired base thickness (minimum 15mm). Continue vibrating until stone begins to set.',
      },
      {
        title: 'Allow Complete Set',
        content:
          'Let the stone cure undisturbed for the full manufacturer-recommended time—typically 45-60 minutes minimum for Type IV products.',
      },
      {
        title: 'Separate and Inspect',
        content:
          'Carefully separate the cast from the impression. Inspect each analog for voids, bubbles, or incomplete stone coverage. Verify analogs are firmly embedded.',
      },
      {
        title: 'Verify Transfer Accuracy',
        content:
          'Test the verification jig on the new master cast. The jig should seat passively with Sheffield testing showing no gaps.',
      },
    ],
    tips: [
      'Pour the cast within one hour of impression taking to minimize material relaxation',
      'Store poured casts in humid environments for the first 24 hours',
      'Label casts immediately with patient name, date, and implant system',
      'Consider pouring duplicate casts for complex cases as insurance against damage',
    ],
    mistakes: [
      {
        title: 'Inaccurate water/powder ratio',
        content: 'Even small deviations affect expansion and strength. Measure precisely.',
      },
      {
        title: 'Air incorporation',
        content:
          'Bubbles at analog interfaces create positional errors. Vacuum mix and vibrate consistently.',
      },
      {
        title: 'Premature separation',
        content:
          'Removing the cast before complete stone set risks distortion. Wait the full cure time.',
      },
    ],
    instaBarHelps: `When a master cast is poured from an impression made with Insta-Bar metal splinting, the analog positions reflect true clinical implant positions. After pouring, the same Insta-Bar jig can verify cast accuracy—if Sheffield testing passes on both patient and cast, fabrication can proceed with confidence.`,
  },

  'check-analog-position': {
    overview: `Checking analog position accuracy is the laboratory's quality gate before committing to framework design and fabrication. A master cast may appear perfect visually while harboring positional errors invisible to inspection. Systematic verification using physical testing confirms that analog positions accurately represent clinical implant positions.`,
    whatYouNeed: [
      'Master cast with embedded analogs',
      'Clinical verification jig (from impressioning appointment)',
      'Hex drivers compatible with prosthetic components',
      'Calibrated torque wrench',
      'Dental explorer and magnification',
      'Fit checking medium or articulating film',
      'Documentation forms',
    ],
    steps: [
      {
        title: 'Visual Inspection',
        content:
          'Examine the master cast under good illumination and magnification. Check each analog for secure embedment, proper orientation, and complete stone coverage.',
      },
      {
        title: 'Verify Analog Stability',
        content:
          'Apply gentle rocking pressure to each analog. There should be zero detectable movement.',
      },
      {
        title: 'Clean Analog Interfaces',
        content:
          'Remove any stone dust, debris, or residue from analog platforms using compressed air and soft brush.',
      },
      {
        title: 'Obtain Clinical Verification Jig',
        content:
          'The verification jig used at the impression appointment serves as the reference standard for cast verification.',
      },
      {
        title: 'Seat Verification Jig on Cast',
        content:
          'Position the verification jig over the master cast analogs. Allow it to settle passively without forcing.',
      },
      {
        title: 'Perform Sheffield Test - First Position',
        content:
          'Select the most distal analog on one side. Thread the prosthetic screw and apply full torque to this single position only. Examine all other interfaces for gaps.',
      },
      {
        title: 'Evaluate All Interfaces',
        content:
          'Systematically probe each non-torqued interface. Under magnification, contacts should appear complete with no visible gap.',
      },
      {
        title: 'Repeat from Opposite Side',
        content:
          'Release the first screw. Apply torque to the most distal analog on the opposite side. Repeat interface examination.',
      },
      {
        title: 'Apply Disclosing Medium',
        content:
          'For subtle discrepancy detection, apply fit checking material to all interfaces. Examine contact patterns.',
      },
      {
        title: 'Compare Results to Clinical Testing',
        content:
          'The verification jig should fit the master cast identically to how it fit the patient clinically.',
      },
      {
        title: 'Make Go/No-Go Decision',
        content:
          'A verification jig that passes Sheffield testing on the master cast confirms analog positions are accurate—proceed to framework design.',
      },
    ],
    tips: [
      'Perform cast verification before any laboratory design work begins',
      'Use the same torque values consistently for repeatable comparison to clinical testing',
      'Photograph verification jig fit on the cast for documentation',
      'Communicate verification results to the clinician for case records',
    ],
    mistakes: [
      {
        title: 'Skipping verification',
        content:
          'Beginning design on an unverified cast risks fabricating a framework to incorrect positions.',
      },
      {
        title: 'Using a different verification jig',
        content:
          'The clinical jig represents verified positions. A lab-fabricated jig might be accurate to the cast but not to the patient.',
      },
      {
        title: 'Forcing the jig to fit',
        content:
          "If the jig doesn't seat passively, something is wrong. Investigate rather than forcing engagement.",
      },
    ],
    instaBarHelps: `Insta-Bar verification jigs serve as the objective reference standard for analog position verification. The rigid metal construction provides unambiguous pass/fail results. When the Insta-Bar jig that passed clinical Sheffield testing also passes on the master cast, you have verified end-to-end accuracy from patient to working model.`,
  },

  'fabricate-framework': {
    overview: `Fabricating a passively fitting framework requires precision at every stage: accurate master cast, appropriate material selection, optimized design, and controlled manufacturing. Even with perfectly positioned analogs, design decisions and fabrication technique affect whether the final framework seats without stress.`,
    whatYouNeed: [
      'Verified master cast with accurate analog positions',
      'CAD/CAM design software with implant library',
      'Appropriate framework material (titanium, chrome-cobalt, zirconia)',
      'Precision milling equipment or casting setup',
      'Measurement and inspection tools',
      'Try-in components for clinical verification',
    ],
    steps: [
      {
        title: 'Confirm Cast Verification',
        content:
          'Before beginning design, verify that the master cast has passed accuracy testing using the clinical verification jig.',
      },
      {
        title: 'Select Framework Material',
        content:
          'Choose material based on clinical requirements. Milled titanium offers excellent accuracy and biocompatibility. Zirconia provides aesthetics. Chrome-cobalt remains economical.',
      },
      {
        title: 'Scan the Master Cast',
        content:
          'Digitize the master cast using a high-accuracy laboratory scanner. Capture analog positions, soft tissue contours, and reference landmarks.',
      },
      {
        title: 'Import into Design Software',
        content:
          'Load scan data into CAD software with implant-specific libraries. Verify that analog positions import correctly.',
      },
      {
        title: 'Design with Passive Fit Priority',
        content:
          'Design the framework to minimize stress concentration and optimize screw access. Consider cantilever length limitations and cross-sectional dimensions.',
      },
      {
        title: 'Account for Material Properties',
        content:
          'Each material behaves differently during processing. Titanium mills accurately. Zirconia shrinks during sintering. Apply appropriate compensation factors.',
      },
      {
        title: 'Plan for Try-In',
        content:
          'Design the framework to allow try-in evaluation before final finishing. A bare framework can be adjusted more easily.',
      },
      {
        title: 'Execute Manufacturing',
        content:
          'Mill, print, or cast the framework according to material requirements. Monitor manufacturing parameters and inspect for defects.',
      },
      {
        title: 'Laboratory Sheffield Testing',
        content:
          'Before clinical delivery, test the framework on the master cast using Sheffield protocol. The framework should fit the verified cast passively.',
      },
      {
        title: 'Prepare for Clinical Try-In',
        content:
          'Clean and sterilize the framework. Include appropriate try-in screws. Document laboratory verification results.',
      },
    ],
    tips: [
      'Use design libraries specific to your implant systems for accurate virtual positioning',
      'Build conservative safety margins into cantilever lengths and connector dimensions',
      'Consider framework segmentation for very long spans',
      'Maintain detailed documentation of design decisions',
    ],
    mistakes: [
      {
        title: 'Designing on unverified casts',
        content:
          'Even perfect design and manufacturing cannot overcome inaccurate analog positions.',
      },
      {
        title: 'Ignoring material shrinkage',
        content:
          'Zirconia sintering shrinkage must be compensated in design. Failure to account produces undersized frameworks.',
      },
      {
        title: 'Excessive cantilever length',
        content:
          'Long cantilevers amplify any positional error and stress implants. Follow evidence-based length limits.',
      },
    ],
    instaBarHelps: `Insta-Bar verification establishes the accuracy foundation that framework fabrication requires. When the master cast has been verified with Insta-Bar Sheffield testing, laboratories can proceed with confidence that analog positions are accurate. Frameworks designed on Insta-Bar-verified casts seat passively at rates far exceeding industry norms.`,
  },

  'test-before-milling': {
    overview: `Zirconia framework fabrication represents significant material and labor investment—a full arch framework may consume $500-800 in material alone. Discovering misfit after sintering means complete remake with no salvage options. Pre-milling verification protocols test fit before committing to final fabrication, catching errors when correction costs minutes rather than days.`,
    whatYouNeed: [
      'Verified master cast',
      'Pre-sintering zirconia blank or PMMA prototype capability',
      'CAD/CAM design finalized',
      'Try-in screws and drivers',
      'Sheffield test protocol and instruments',
      'Clinical verification appointment scheduled',
    ],
    steps: [
      {
        title: 'Understand Why Pre-Milling Matters',
        content:
          'Sintered zirconia cannot be significantly adjusted. Unlike metal frameworks that can be sectioned and laser-welded, zirconia misfit requires complete refabrication.',
      },
      {
        title: 'Select Verification Material',
        content:
          'Options include pre-sintered zirconia (soft state before final sintering), PMMA prototype, or pattern resin model.',
      },
      {
        title: 'Mill the Verification Framework',
        content:
          'Using the finalized CAD design, mill a try-in framework from your verification material. Apply the same design files that will produce the final zirconia.',
      },
      {
        title: 'Laboratory Fit Assessment',
        content:
          'Seat the verification framework on the master cast. Perform Sheffield testing. The prototype should fit the verified master cast passively.',
      },
      {
        title: 'Schedule Clinical Try-In',
        content: 'Before committing to final zirconia milling, evaluate the prototype clinically.',
      },
      {
        title: 'Clinical Sheffield Protocol',
        content:
          'At try-in, seat the prototype and apply torque to one distal position only. Examine all non-torqued interfaces under magnification.',
      },
      {
        title: 'Evaluate Occlusion and Emergence',
        content:
          'Beyond passive fit, assess functional aspects: occlusal scheme accuracy, screw access angulation, emergence profile, and lip support.',
      },
      {
        title: 'Document Needed Modifications',
        content: 'Record all adjustment requirements and any design modifications needed.',
      },
      {
        title: 'Implement Corrections',
        content:
          'Address identified issues in the CAD design or master cast. Re-mill a verification framework if changes are significant.',
      },
      {
        title: 'Final Milling Authorization',
        content:
          'Only after the verification framework passes both laboratory and clinical Sheffield testing, authorize final zirconia milling.',
      },
    ],
    tips: [
      'Build try-in appointments into case scheduling rather than treating verification as optional',
      'Use consistent torque values in laboratory and clinical testing',
      'Photograph prototype fit documentation for records',
      'Consider retaining successful prototypes as emergency temporaries',
    ],
    mistakes: [
      {
        title: 'Skipping try-in to save time',
        content:
          'The hours spent verifying save days of remake. Pre-milling verification is mandatory, not optional.',
      },
      {
        title: 'Assuming laboratory fit guarantees clinical fit',
        content: 'The prototype must pass Sheffield testing both on the cast and in the patient.',
      },
      {
        title: 'Proceeding despite marginal fit',
        content:
          '"Almost passive" in prototype becomes "won\'t seat" in sintered zirconia. Demand perfect fit before final milling.',
      },
    ],
    instaBarHelps: `Insta-Bar verification ensures that the master cast underlying the prototype design is accurate to clinical reality. When a prototype fails clinical try-in despite passing laboratory testing, cast accuracy is the first suspect. An Insta-Bar jig that passed Sheffield testing clinically and on the cast rules out this error source.`,
  },

  // ============================================================
  // DOCUMENTATION (4)
  // ============================================================

  ifu: {
    overview: `The Insta-Bar Verification System Instructions for Use provides comprehensive guidance on proper handling, clinical application, and maintenance of the system. This document covers indications, contraindications, warnings, and step-by-step usage protocols to ensure safe and effective verification of full arch implant positions.`,
    whatYouNeed: [
      'Insta-Bar Verification Kit with appropriate size links',
      'Compatible implant system components',
      'Sterilization equipment (autoclave)',
      'Hex drivers and torque wrench (10-15 Ncm)',
      'Impression materials and custom tray',
      'Clinical documentation forms',
    ],
    steps: [
      {
        title: 'Kit Contents Verification',
        content:
          'Upon receipt, verify all components are present: titanium links in multiple lengths (10mm, 12mm, 15mm, 18mm, 20mm), hex screws, storage case, and documentation. Report any missing items immediately.',
      },
      {
        title: 'Pre-Procedure Sterilization',
        content:
          'All Insta-Bar components must be sterilized before patient use. Follow the autoclave protocol: 134°C (273°F) for minimum 3 minutes wrapped, or 121°C (250°F) for 15 minutes.',
      },
      {
        title: 'Link Selection',
        content:
          'Measure inter-implant distances and select appropriate link lengths. Links should span between adjacent implants with 2-3mm engagement on each side. Use a consistent link size across all connections when possible.',
      },
      {
        title: 'Assembly on Implants',
        content:
          'Thread verification screws through link holes into implant platforms. Finger-tighten initially to confirm proper seating, then apply final torque of 10-15 Ncm per manufacturer specifications.',
      },
      {
        title: 'Sheffield Test Protocol',
        content:
          'Apply torque to one distal screw only. Examine all non-torqued interfaces under magnification. Complete passivity means no visible gap at any interface. Repeat from opposite side.',
      },
      {
        title: 'Post-Use Processing',
        content:
          'After clinical use, disassemble the verification assembly. Clean all components with enzymatic cleaner to remove biological debris. Inspect for damage before re-sterilization.',
      },
    ],
    tips: [
      'Keep multiple link sizes available chairside for optimal span coverage',
      'Document Sheffield test results photographically for case records',
      'Use consistent torque values for reproducible testing',
      'Store components in dedicated case to prevent loss or damage',
    ],
    mistakes: [
      {
        title: 'Using unsterilized components',
        content:
          'All Insta-Bar components must be sterile for patient contact. Never skip the sterilization step.',
      },
      {
        title: 'Over-torquing screws',
        content:
          'Excessive torque can damage implant interfaces. Follow the 10-15 Ncm specification.',
      },
      {
        title: 'Ignoring visual inspection',
        content: 'Always inspect components for wear, damage, or contamination before each use.',
      },
    ],
    instaBarHelps: `These Instructions for Use ensure consistent, safe application of the Insta-Bar system across all clinical settings. Following the documented protocols guarantees optimal verification outcomes and patient safety.`,
  },

  'quick-start': {
    overview: `Get started with Insta-Bar verification in five minutes. This quick-start guide covers the essential steps to perform your first Sheffield test using the metal link verification system, transforming resin jig uncertainty into metal-precise confidence.`,
    whatYouNeed: [
      'Insta-Bar Quick-Start Kit',
      'Hex driver (compatible with your implant system)',
      'Torque wrench (10-15 Ncm)',
      'Explorer or dental probe',
      'Magnification (loupes or microscope)',
    ],
    steps: [
      {
        title: 'Open Your Kit',
        content:
          'Remove the Insta-Bar links and screws from sterilized packaging. Identify link lengths printed on each component.',
      },
      {
        title: 'Expose the Implants',
        content:
          'Remove the provisional or healing abutments from all implant positions. Clean the implant platforms.',
      },
      {
        title: 'Measure Spans',
        content:
          'Estimate inter-implant distances. Select links that span each gap with adequate screw engagement (minimum 2mm per side).',
      },
      {
        title: 'Connect the Links',
        content:
          'Thread verification screws through link holes into implants. Connect all positions into a rigid chain. Finger-tighten.',
      },
      {
        title: 'Sheffield Test',
        content:
          'Torque ONE distal screw to 10-15 Ncm. Check ALL other interfaces for gaps. Repeat from opposite side. Passivity = no gaps.',
      },
    ],
    tips: [
      'Start with the longest spans first when selecting link sizes',
      'A fully passive jig clicks into place without resistance',
      'Photograph your first successful Sheffield test for reference',
      'Keep the Quick-Start card chairside during initial cases',
    ],
    mistakes: [
      {
        title: 'Rushing the process',
        content: 'Take time to evaluate each interface. Verification accuracy cannot be rushed.',
      },
      {
        title: 'Skipping interface inspection',
        content:
          'Every non-torqued interface must be examined. Missing one gap invalidates the test.',
      },
      {
        title: 'Using wrong link sizes',
        content:
          'Links that are too short or long compromise verification accuracy. Measure before connecting.',
      },
    ],
    instaBarHelps: `This quick-start approach gets you verifying in minutes rather than learning a complex system. Once comfortable with the basics, explore the full clinical library for advanced protocols and troubleshooting guidance.`,
  },

  compatibility: {
    overview: `The Insta-Bar Verification System is designed for universal compatibility with major implant platforms through its connection interface system. This guide outlines supported implant systems, connection types, and any platform-specific considerations for optimal verification results.`,
    whatYouNeed: [
      'Knowledge of your implant system connection type',
      'Manufacturer specifications for your implants',
      'Appropriate hex drivers for your system',
      'Insta-Bar verification components',
    ],
    steps: [
      {
        title: 'Identify Your Implant System',
        content:
          'Determine the manufacturer and specific implant line you are verifying. Common systems include Nobel Biocare, Straumann, Zimmer Biomet, Dentsply Sirona, BioHorizons, and others.',
      },
      {
        title: 'Determine Connection Type',
        content:
          'Identify whether your implants use internal hex, external hex, conical (Morse taper), or other connection interfaces. This determines screw compatibility.',
      },
      {
        title: 'Select Compatible Screws',
        content:
          'Match Insta-Bar verification screws to your implant connection. Use manufacturer-specific screws when available for optimal engagement.',
      },
      {
        title: 'Verify Hex Driver Compatibility',
        content:
          'Ensure your hex driver matches both the verification screw and implant interface. Mismatched drivers risk stripping.',
      },
      {
        title: 'Confirm Torque Specifications',
        content:
          'Apply torque values appropriate for your implant system. Most platforms specify 10-15 Ncm for verification procedures.',
      },
      {
        title: 'Test Fit Before Clinical Use',
        content:
          'On a bench model or previous case, verify that all components engage properly before patient application.',
      },
    ],
    tips: [
      'Maintain a compatibility reference chart in your operatory',
      'Stock common screw types for multi-system practices',
      'When in doubt, contact Insta-Bar technical support for guidance',
      'Document successful combinations for future reference',
    ],
    mistakes: [
      {
        title: 'Assuming universal fit',
        content:
          'While Insta-Bar links are universal, screws must match your specific implant connection.',
      },
      {
        title: 'Using damaged screws',
        content:
          'Worn or stripped screws compromise verification accuracy. Inspect before each use.',
      },
      {
        title: 'Ignoring torque specifications',
        content:
          'Each implant system has specific torque recommendations. Follow manufacturer guidance.',
      },
    ],
    instaBarHelps: `Insta-Bar's universal link design accommodates virtually any inter-implant configuration, while system-specific screws ensure proper engagement with your preferred implant platform. Contact technical support for compatibility questions on unusual configurations.`,
  },

  sterilization: {
    overview: `Proper sterilization of Insta-Bar components ensures patient safety and maintains system longevity. This protocol covers cleaning, preparation, autoclave parameters, and storage requirements for all reusable Insta-Bar verification components.`,
    whatYouNeed: [
      'Enzymatic cleaning solution',
      'Ultrasonic cleaner',
      'Soft-bristle brush',
      'Sterilization pouches or wraps',
      'Steam autoclave (gravity or pre-vacuum)',
      'Biological and chemical indicators',
      'Clean storage containers',
    ],
    steps: [
      {
        title: 'Point-of-Use Treatment',
        content:
          'Immediately after clinical use, wipe components to remove gross debris. Do not allow biological material to dry on surfaces. Place in closed container for transport to processing area.',
      },
      {
        title: 'Manual Cleaning',
        content:
          'Using enzymatic cleaner and soft brush, remove all visible contamination from links and screws. Pay attention to screw threads and link connection points.',
      },
      {
        title: 'Ultrasonic Cleaning',
        content:
          'Place components in ultrasonic cleaner with appropriate solution for 5-10 minutes. This removes debris from areas manual cleaning cannot reach.',
      },
      {
        title: 'Rinse and Dry',
        content:
          'Thoroughly rinse all components with distilled or deionized water. Dry completely using lint-free materials or medical-grade compressed air.',
      },
      {
        title: 'Inspection',
        content:
          'Examine each component under magnification for damage, wear, or residual contamination. Remove any compromised items from service.',
      },
      {
        title: 'Packaging',
        content:
          'Place components in sterilization pouches or wrap according to your autoclave manufacturer instructions. Ensure pouches are properly sealed.',
      },
      {
        title: 'Autoclave Processing',
        content:
          'Steam sterilize using validated parameters: 134°C (273°F) for 3-4 minutes (pre-vacuum) or 121°C (250°F) for 15-30 minutes (gravity displacement).',
      },
      {
        title: 'Drying and Storage',
        content:
          'Allow complete drying before storage. Store in clean, dry environment. Maintain package integrity until use.',
      },
    ],
    tips: [
      'Process components promptly to prevent biofilm formation',
      'Use instrument cassettes to keep sets organized through processing',
      'Monitor sterilization effectiveness with biological indicators weekly',
      'Rotate stock to ensure older sterilized items are used first',
    ],
    mistakes: [
      {
        title: 'Delayed processing',
        content:
          'Allowing debris to dry makes cleaning difficult and compromises sterilization effectiveness.',
      },
      {
        title: 'Overloading the autoclave',
        content:
          'Crowded loads prevent adequate steam penetration. Follow autoclave capacity guidelines.',
      },
      {
        title: 'Using wet packs',
        content: 'Moisture compromises sterility. Ensure complete drying before storage.',
      },
    ],
    instaBarHelps: `Insta-Bar components are manufactured from medical-grade materials designed to withstand repeated sterilization cycles without degradation. Following these protocols maintains component integrity and ensures safe, effective verification for every patient.`,
  },

  // ============================================================
  // TROUBLESHOOTING (3)
  // ============================================================

  'jig-doesnt-fit': {
    overview: `Verification jig misfit in full-arch implant cases results from cumulative errors throughout the prosthetic workflow—a phenomenon termed the "distortion equation." Each clinical and laboratory step introduces deviations that compound to create seating problems. Peer-reviewed studies report an inherent discrepancy in implant impressions of approximately 50 microns even under ideal conditions. Understanding these causes enables systematic troubleshooting and prevents costly remakes.`,
    whatYouNeed: [
      'Dental explorer and magnification (20x minimum)',
      'Calibrated torque wrench',
      'Modeling wax strips (13mm wide)',
      'Isopropyl alcohol and air syringe',
      'Periapical radiographs capability',
      'Documentation forms for findings',
    ],
    steps: [
      {
        title: 'Perform the Sheffield Test',
        content:
          'Seat the verification jig with finger pressure only. Tighten ONE distal screw to finger-tight torque. Examine all non-torqued interfaces under 20x magnification for horizontal and vertical gaps. Any visible gap indicates misfit. Repeat from the opposite distal position.',
      },
      {
        title: 'Apply the Wax Strip Test',
        content:
          'Place 13mm-wide modeling wax at room temperature (68°F/20°C) between the framework and tissue. Apply pressure equivalent to 200 grams. If the gap closes without wax buckling, fit may be clinically acceptable. Buckling indicates significant misfit.',
      },
      {
        title: 'Check for Impression Errors',
        content:
          'Impression material distortion occurs through cross-linking during setting, loss of volatile constituents, water sorption, and elastic deformation during removal. Implant angulation beyond 15 degrees significantly increases distortion. Verify the original impression technique used splinting and appropriate material thickness.',
      },
      {
        title: 'Evaluate Polymerization Shrinkage',
        content:
          'Autopolymerizing acrylic resins exhibit 5-8% volumetric shrinkage over 24 hours, with 80% occurring within the first 17 minutes. If a resin jig was used, confirm it was sectioned and reluted after full polymerization. GC Pattern Resin LS shows only 0.36% shrinkage versus 5.72% for standard Pattern Resin.',
      },
      {
        title: 'Inspect Analog Positioning',
        content:
          'Check master cast analogs for improper seating, movement during stone vibration, or angular rotation. Combined machining tolerances between impression copings and analogs can exceed 61 microns per implant position.',
      },
      {
        title: 'Rule Out Contamination',
        content:
          'Clean all implant platforms with isopropyl alcohol and air dry. Debris, saliva, or blood prevents complete seating and mimics positional error. Examine component interfaces for damage from cross-threading or stripped hex connections.',
      },
      {
        title: 'Take Diagnostic Radiographs',
        content:
          'Periapical radiographs can reveal gaps at the implant-abutment interface not visible clinically. Compare to baseline radiographs if available.',
      },
      {
        title: 'Document and Decide',
        content:
          'Record which positions show gaps and approximate magnitude. Localized gaps suggest specific analog error; systematic gaps indicate master cast or impression failure requiring remake.',
      },
    ],
    tips: [
      'Always use custom impression trays—stock trays allow more movement and distortion',
      'Allow resin jigs to cure 24 hours before sectioning for maximum accuracy',
      'Repeated screw tightening increases rotational tolerance—after 4 cycles at 35 Ncm, rotation increases to approximately 1 degree',
      'When in doubt, remake the impression rather than proceeding with a questionable verification',
    ],
    mistakes: [
      {
        title: 'Tightening multiple screws during testing',
        content:
          'Each additional screw draws the jig toward seating, masking misfit. Only ONE screw may be tightened during Sheffield testing.',
      },
      {
        title: 'Using inadequate magnification',
        content:
          'Gaps under 100 microns are clinically significant but invisible to the naked eye. Use 20x magnification minimum.',
      },
      {
        title: 'Blaming the laboratory prematurely',
        content:
          'Framework misfit often originates from impression errors. Verify your verification jig accuracy before assigning responsibility.',
      },
      {
        title: 'Accepting "close enough" fit',
        content:
          'Any detectable gap indicates misfit. Passive fit means zero perceivable gap at any interface.',
      },
    ],
    instaBarHelps: `Insta-Bar eliminates two major causes of jig misfit: polymerization shrinkage and jig flexibility. The stainless steel links cannot shrink (0% versus 5-8% for resin), and the metal construction provides 40-50x greater rigidity than acrylic. When Insta-Bar shows a gap, you can trust it represents true positional discrepancy—not material distortion.`,
  },

  'framework-wont-seat': {
    overview: `Implant framework misfit stems from cumulative distortions throughout fabrication, making passive fit one of the most challenging goals in implant prosthodontics. While Brånemark originally specified misfit should not exceed 10 microns, current literature suggests misfits up to 150 microns may be clinically acceptable—though no definitive threshold has been established. Understanding the error sources enables systematic diagnosis and appropriate correction strategies.`,
    whatYouNeed: [
      'Verification jig that passed clinical Sheffield testing',
      'Hex drivers and calibrated torque wrench',
      'Dental explorer and 20x magnification',
      'Fit checking material or articulating film',
      'Sectioning disc and slow-speed handpiece',
      'Access to laser welding services',
    ],
    steps: [
      {
        title: 'Verify Master Cast Accuracy First',
        content:
          'Before blaming the framework, confirm master cast accuracy. The verification jig that passed clinical testing must also pass Sheffield testing on the master cast. If the jig fits the patient but not the cast, the cast is inaccurate—remake the impression.',
      },
      {
        title: 'Perform Framework Sheffield Test',
        content:
          'Seat the framework and tighten ONE distal screw only. Examine all interfaces under magnification. Repeat from opposite side. Document gap locations and approximate magnitude. Systematic gaps suggest master cast error; localized gaps may indicate framework fabrication issues.',
      },
      {
        title: 'Evaluate CAD/CAM Error Sources',
        content:
          'Full-arch intraoral scans show accuracy values ranging from 21-816 microns, with accuracy decreasing as inter-implant distance increases. Check for scan body library mismatches, STL mesh approximation errors, and milling limitations (smallest bur ~1mm creates up to 0.5mm discrepancy on complex surfaces).',
      },
      {
        title: 'Consider Material Shrinkage',
        content:
          'Cobalt-chromium casting shrinks approximately 2.3%. CNC-milled titanium shows only 3-80 microns 3D distortion. Milled frameworks achieve the most accurate fit—mean 50.1 microns versus 71.4 microns for additive manufacturing.',
      },
      {
        title: 'Apply Disclosing Medium',
        content:
          'Use fit checking material on all implant interfaces. Seat the framework, tighten one screw, and examine contact patterns. Uniform contact indicates accurate fit; uneven or absent contact reveals positional error.',
      },
      {
        title: 'Determine Correction Approach',
        content:
          'For correctable misfit: diagonal sectioning produces better passivity than transverse cuts. Ni-Cr casting misfit of 58.66 microns can reduce to 27.51 microns after sectioning and laser welding. Gas-air torch soldering shows the most consistent accuracy among joining methods.',
      },
      {
        title: 'Consider EDM for Precision Fit',
        content:
          'Electrical Discharge Machining achieves surface finish of 2-5 microns and gap tolerance of maximum 5 microns. EDM can achieve gap-free, tension-free fit regardless of whether structures are cast or CAD/CAM milled. Combined laser welding plus EDM shows optimal results.',
      },
      {
        title: 'Make Go/No-Go Decision',
        content:
          'Section and correct when misfit is localized, material is weldable, and marginal gap closes with light pressure. Remake when multiple areas show significant misfit, wax test shows buckling, visible rocking occurs, or CAD/CAM systematic error is identified.',
      },
    ],
    tips: [
      'Milled titanium offers the best combination of accuracy and biocompatibility for full-arch frameworks',
      'Wax pattern deterioration causes significant fit degradation at 1 week to 1 month of storage',
      'Conventional lost-wax casting for one-piece full-arch frameworks is considered imprecise for passive fit requirements',
      'Always schedule framework try-in before final finishing—bare frameworks are easier to correct',
    ],
    mistakes: [
      {
        title: 'Skipping verification jig confirmation',
        content:
          'Beginning correction without confirming master cast accuracy risks repeating the same error. Always verify the cast first.',
      },
      {
        title: 'Forcing the framework to seat',
        content:
          'A framework requiring pressure to seat is not passively fitting. Forcing screws draws misfit frameworks onto implants, inducing harmful stresses.',
      },
      {
        title: 'Assuming CAD/CAM eliminates error',
        content:
          'Digital workflows introduce their own error sources. Scan stitching errors, library mismatches, and milling limitations all affect fit.',
      },
      {
        title: 'Using transverse sectioning',
        content:
          'Diagonal sectioning produces better passivity than transverse cuts. Plan section locations carefully before cutting.',
      },
    ],
    instaBarHelps: `When a framework fails to seat but your Insta-Bar verification jig passed Sheffield testing on both patient and master cast, the error source is isolated to framework fabrication—not impression or cast accuracy. This diagnostic clarity saves time by directing correction efforts to the actual problem. The rigid metal construction of Insta-Bar provides unambiguous pass/fail results that support confident clinical decision-making.`,
  },

  'jig-flexes': {
    overview: `Verification jig flexibility under torque compromises passive fit assessment and represents a critical clinical problem. Acrylic pattern resin jigs possess inherent flexibility that can produce false-negative verification tests—appearing to fit when positional errors actually exist. Titanium frameworks provide approximately 40-50 times greater rigidity than acrylic resins, explaining why metal verification eliminates this concern entirely.`,
    whatYouNeed: [
      'Understanding of material properties',
      'Alternative jig materials for comparison',
      'Magnification for interface inspection',
      'Knowledge of resin shrinkage compensation techniques',
    ],
    steps: [
      {
        title: 'Understand Why Resin Flexes',
        content:
          'Pattern resins have elastic modulus of only 2-3 GPa compared to titanium at 110 GPa and cobalt-chrome at 210-220 GPa. This 40-100x difference in rigidity means resin jigs deform under torque loads that metal jigs resist completely. The jig may appear to seat when it is actually flexing to accommodate positional errors.',
      },
      {
        title: 'Evaluate Cross-Sectional Bulk',
        content:
          'Longer spans between implants require proportionally greater cross-sectional bulk to resist flexure. However, excessive bulk introduces polymerization shrinkage distortion (5-8% volumetric)—creating a fundamental trade-off that cannot be resolved with resin materials alone.',
      },
      {
        title: 'Check Splinting Technique',
        content:
          'Bulk application produces higher shrinkage than sectioning and rejoining. If the jig was fabricated without sectioning, polymerization stresses at coping interfaces may have created gaps or weakened connections. Proper technique requires 24-hour cure before sectioning.',
      },
      {
        title: 'Assess Material Choice',
        content:
          'Flexural strength varies significantly: GC Pattern Resin LS at 63 MPa, bis-acryl composites at 170-210 MPa. Type IV dental stone jigs offer lowest 3D deviation (18.72 microns) with the advantage of fracturing rather than flexing—clearly indicating misfit.',
      },
      {
        title: 'Test for Flexibility',
        content:
          'Apply lateral force to the seated jig before screw engagement. Any perceptible movement indicates insufficient rigidity for accurate verification. Compare behavior to a metal verification jig if available.',
      },
      {
        title: 'Consider Hybrid Approaches',
        content:
          'Embedding laboratory burs or UDMA light-cured bars in acrylic reduces flexibility and volumetric shrinkage. Pre-fabricated bar systems minimize both concerns while maintaining chairside convenience.',
      },
      {
        title: 'Evaluate Metal Alternatives',
        content:
          'Pre-fabricated metal verification systems provide zero polymerization shrinkage, superior rigidity, elimination of technique sensitivity, and reusability. The per-case cost decreases significantly with reuse.',
      },
    ],
    tips: [
      'Type IV stone jigs fracture to indicate misfit rather than flexing—providing clearer pass/fail results',
      'GC Pattern Resin LS (0.36% shrinkage) significantly outperforms standard Pattern Resin (5.72%)',
      'Photopolymerizable resin requires minimum 3-minute cure plus additional 3 minutes after sectioning',
      'If resin jig passes but framework fails, suspect jig flexibility masked the error',
    ],
    mistakes: [
      {
        title: 'Building thicker to increase rigidity',
        content:
          'Greater resin mass produces greater shrinkage inaccuracy. Thickness alone cannot overcome the fundamental material limitation.',
      },
      {
        title: 'Rushing polymerization',
        content:
          'Premature removal before complete cure leads to reduced mechanical strength and continued dimensional change. Allow full manufacturer-recommended cure time.',
      },
      {
        title: 'Ignoring flexibility as error source',
        content:
          'When frameworks fail despite "passing" verification, jig flexibility should be the first suspect. Resin jigs can mask errors that metal jigs reveal.',
      },
      {
        title: 'Assuming all resins perform equally',
        content:
          'Shrinkage ranges from 0.36% (Pattern Resin LS) to 7.43% (some light-cured materials). Material selection significantly affects accuracy.',
      },
    ],
    instaBarHelps: `Insta-Bar's stainless steel construction provides 40-50x greater rigidity than acrylic pattern resins, completely eliminating flexibility as an error source. When torque is applied during Sheffield testing, metal links cannot deform—gaps indicate true positional discrepancy, not material flex. This unambiguous pass/fail result enables confident clinical decision-making that resin jigs cannot provide.`,
  },

  // ============================================================
  // COMPARISONS (4)
  // ============================================================

  'metal-vs-resin': {
    overview: `The choice between metal and resin verification jigs involves fundamental trade-offs between dimensional stability, workflow efficiency, cost structure, and clinical reliability. Metal jigs offer 40-100x greater rigidity with zero shrinkage, while resin jigs provide chairside fabrication flexibility. Peer-reviewed evidence strongly favors metal for accuracy—when verification jig was used, 100% of frameworks exhibited passive fit versus only 14% without verification.`,
    whatYouNeed: [
      'Understanding of material properties',
      'Cost-benefit analysis for your practice',
      'Assessment of case volume and complexity',
      'Evaluation of current remake rates',
    ],
    steps: [
      {
        title: 'Compare Dimensional Stability',
        content:
          'Metal jigs exhibit zero polymerization shrinkage and maintain dimensions indefinitely. Resin shrinkage values: GC Pattern Resin 5.72%, DuraLay 5.07%, GC Pattern Resin LS 0.36-0.37%. Even "low-shrinkage" resins contract measurably. Over a 50mm full-arch span, 5% shrinkage translates to 2.5mm cumulative error.',
      },
      {
        title: 'Evaluate Rigidity Differences',
        content:
          'Titanium elastic modulus: 110-115 GPa. Cobalt-chrome: 210-220 GPa. Pattern resins: 2-3 GPa. Metal provides 40-100x greater rigidity, eliminating flexibility as an error source during Sheffield testing. Resin jigs may flex to accommodate positional errors, producing false-negative results.',
      },
      {
        title: 'Assess Accuracy Data',
        content:
          'Type IV stone jigs achieved lowest 3D deviation at 18.72 microns, followed by photopolymerizable resin at 23.16 microns, GC Pattern Resin at 23.51 microns, and composite resin at 46.72 microns. Metal jigs from CAD/CAM milling achieve comparable or superior accuracy.',
      },
      {
        title: 'Calculate Time Investment',
        content:
          'Metal jig verification: 5-10 minutes with pre-fabricated components. Resin jig fabrication: 20-45 minutes chairside plus 24-hour cure for optimal accuracy, plus sectioning and reluting time. Metal saves significant chair time per case.',
      },
      {
        title: 'Consider Reusability',
        content:
          'Metal components are sterilizable and reusable across multiple cases, reducing per-case cost over time. Resin jigs are single-use. High-volume practices see greater ROI from metal systems.',
      },
      {
        title: 'Evaluate Correction Capability',
        content:
          'Resin jigs can be sectioned and reluted chairside if misfit is detected. Metal jigs require adjustment through different means or component replacement. However, metal jigs rarely require correction due to superior initial accuracy.',
      },
      {
        title: 'Factor in Reliability',
        content:
          'Metal jigs provide consistent, technique-independent results. Resin accuracy depends heavily on operator technique, material handling, cure time adherence, and environmental conditions. Metal reduces variability across operators and cases.',
      },
    ],
    tips: [
      'Stone jigs fracture rather than flex, providing clearer pass/fail indication than resin',
      'Calculate your current remake rate—metal verification typically reduces remakes to near zero',
      'Consider hybrid approaches: metal bars with minimal resin for attachment',
      'Per-case metal jig cost decreases significantly with reuse—evaluate total cost over case volume',
    ],
    mistakes: [
      {
        title: 'Choosing based on upfront cost alone',
        content:
          'Resin appears cheaper per case initially, but remake costs, chair time, and patient dissatisfaction favor metal over time.',
      },
      {
        title: 'Assuming resin technique can match metal accuracy',
        content:
          'Even perfect resin technique cannot overcome 5-8% material shrinkage. The physics favor metal.',
      },
      {
        title: 'Ignoring flexibility as accuracy factor',
        content:
          'Resin jigs that appear to fit may be flexing to mask positional errors. Metal provides unambiguous results.',
      },
      {
        title: 'Undervaluing time savings',
        content:
          'Chair time has real cost. Metal verification in 5 minutes versus 45+ minutes for resin represents significant practice efficiency.',
      },
    ],
    instaBarHelps: `Insta-Bar combines the best attributes of metal verification: zero shrinkage, 40-50x greater rigidity than resin, reusability across cases, and technique-independent results. The stainless steel links provide unambiguous Sheffield test results that eliminate the uncertainty inherent in resin-based verification. Practices switching to Insta-Bar report dramatic reductions in remake rates and chair time.`,
  },

  'vs-photogrammetry': {
    overview: `Photogrammetry systems like PIC Dental and ICam4D capture implant positions using extraoral cameras and coded markers, achieving accuracy of 25-28 microns—significantly exceeding both traditional impressions (66 microns) and intraoral scanning (77+ microns) for full-arch cases. However, equipment costs of $40,000-80,000 require careful ROI analysis. Physical verification jigs remain valuable for practices without photogrammetry or as confirmation of digital accuracy.`,
    whatYouNeed: [
      'Understanding of photogrammetry principles',
      'Assessment of case volume for ROI calculation',
      'Evaluation of current digital workflow integration',
      'Consideration of learning curve and training needs',
    ],
    steps: [
      {
        title: 'Understand How Photogrammetry Works',
        content:
          'Coded markers (scan bodies) attach to implants. Extraoral cameras capture images from multiple angles. Software algorithms triangulate 3D coordinates (x, y, z) and angular orientation. STL files export for CAD integration. The process does NOT capture soft tissue—requiring separate intraoral scan or conventional impression.',
      },
      {
        title: 'Review Accuracy Evidence',
        content:
          'Peer-reviewed comparison (BMC Oral Health 2025) with 6 implants: ICam4D median 25.23 microns, PIC 28.15 microns, conventional splinted impression 66.05 microns, intraoral scanning 77.58 microns. Both photogrammetry systems significantly outperform traditional methods with no statistical difference between them.',
      },
      {
        title: 'Evaluate Equipment Investment',
        content:
          'Dedicated photogrammetry systems cost approximately $40,000-80,000. ICam4D: ~$39,900 including training and starter kit. PIC offers multiple form factors (Station, Gravity, System) plus smartphone-based PIC app with pay-per-use subscription as lower-cost entry point.',
      },
      {
        title: 'Calculate Per-Case Economics',
        content:
          'ICamBodies cost ~$4,000 per set with $100 refund per returned body—net approximately $8 per use. Photogrammetry eliminates impression materials, verification jig fabrication, multiple fit verification appointments, and remakes due to passive fit issues.',
      },
      {
        title: 'Assess Learning Curve',
        content:
          'Photogrammetry accuracy remains consistent regardless of operator experience—a key differentiator from technique-sensitive conventional methods. Training typically requires 3-5 days. Systems designed for intuitive operation.',
      },
      {
        title: 'Consider Workflow Integration',
        content:
          'Photogrammetry captures implant positions only. Soft tissue requires separate IOS or impression, creating two-device workflow requiring file merging in CAD software. Digital practices may find this seamless; hybrid practices may prefer single-step physical verification.',
      },
      {
        title: 'Identify Appropriate Applications',
        content:
          'Photogrammetry excels for full-arch cases (4+ implants) where IOS accuracy degrades, immediate loading protocols, complex angulations, and high-volume practices. Physical verification remains appropriate for budget constraints, hybrid workflows, and physical try-in confirmation.',
      },
    ],
    tips: [
      'PIC Dental has 49+ peer-reviewed publications and 1.4+ million clinical cases—extensive validation',
      'Photogrammetry accuracy is unaffected by implant distribution, distance, or arch length',
      'Consider lab services offering photogrammetry scanning if equipment investment is prohibitive',
      'Physical verification can confirm digital accuracy when transitioning to photogrammetry workflow',
    ],
    mistakes: [
      {
        title: 'Assuming photogrammetry captures everything',
        content:
          'Soft tissue anatomy requires separate IOS or impression. Plan for the alignment/merging step in your workflow.',
      },
      {
        title: 'Ignoring ROI calculation',
        content:
          'High equipment cost requires sufficient case volume to justify. Calculate break-even based on your full-arch volume and current remake rate.',
      },
      {
        title: 'Dismissing physical verification entirely',
        content:
          'Physical jigs provide tactile confirmation that digital data cannot. Consider hybrid approach during transition.',
      },
      {
        title: 'Underestimating workflow changes',
        content:
          'Two-device capture (photogrammetry + IOS) requires CAD merging. Evaluate software compatibility before purchasing.',
      },
    ],
    instaBarHelps: `Insta-Bar provides physical verification that complements or substitutes for photogrammetry depending on practice needs. For practices without $40,000+ equipment investment, Insta-Bar delivers sub-100-micron accuracy through proven mechanical principles. For digital practices, Insta-Bar can verify photogrammetry data accuracy through physical try-in—if the metal jig fits both patient and digital model, proceed with confidence.`,
  },

  'vs-ijig-optisplint': {
    overview: `ROE Dental Lab's iJIG and Digital Arches' OPTISPLINT represent hybrid verification systems bridging traditional analog approaches with digital workflows. Both require chairside resin luting but offer advantages over conventional pattern resin jigs. iJIG provides a "verification jig with teeth" duplicating the existing prosthesis, while OPTISPLINT uses scannable metal mesh frames with low-shrinkage composite (3.3% versus 5-8% for conventional resins).`,
    whatYouNeed: [
      'Assessment of current full-arch workflow',
      'Evaluation of digital versus analog preference',
      'Understanding of chairside time requirements',
      'Cost comparison for your case volume',
    ],
    steps: [
      {
        title: 'Understand iJIG System',
        content:
          'iJIG is a patented sectioned, lab-fabricated duplicate of the patient existing prosthesis. Workflow: intraoral scan without scan bodies, extraoral scan of prosthesis with iJIG analogs, lab fabricates sectioned duplicate. Chairside resin luting IS required—sections arrive pre-sectioned and must be luted intraorally using Stellar dual-cure resin, GC Pattern Resin, or DuraLay.',
      },
      {
        title: 'Evaluate iJIG Advantages',
        content:
          'Captures implant positions, tissue contours, VDO, and occlusion simultaneously. Reduces full-arch cases from 7+ appointments to as few as 3. Provides patient "test-drive" capability. Works with existing intraoral scanners. Scan analogs cost $22 each and are reusable.',
      },
      {
        title: 'Understand OPTISPLINT System',
        content:
          'Uses splintable scan bodies, metal mesh frames, and OPTIWELD dual-cure composite for chairside assembly. Chairside luting IS required—scan bodies are luted through metal mesh "honeycomb." Serves dual purpose: scannable verification jig AND verified stone cast creation for analog workflows.',
      },
      {
        title: 'Evaluate OPTISPLINT Advantages',
        content:
          'OPTIWELD shrinkage is only 3.3%—significantly better than 5-8% for conventional pattern resins. Enables fully digital immediate load workflow with only IOS. Extraoral scanning eliminates patient factors (blood, saliva). Single-arch kits: $295-445 depending on implant count.',
      },
      {
        title: 'Compare to Pure Metal Verification',
        content:
          'Pure metal jigs (Insta-Bar) offer maximum rigidity with NO resin component and zero shrinkage. Cannot be sectioned/reluted but rarely need correction due to superior accuracy. Both iJIG and OPTISPLINT still rely on resin luting with associated shrinkage and technique sensitivity.',
      },
      {
        title: 'Assess Digital Integration Needs',
        content:
          'iJIG and OPTISPLINT both integrate with digital workflows through scanning capability. Pure metal jigs like Insta-Bar verify physical accuracy but do not contribute scan data. Choose based on whether your workflow is primarily digital or analog.',
      },
      {
        title: 'Calculate Total Cost',
        content:
          'OPTISPLINT: $295-445 per case (single use). iJIG: $22/analog (reusable) plus lab fees. Insta-Bar: reusable metal components with decreasing per-case cost over time. Factor in chairside luting time for iJIG/OPTISPLINT versus immediate verification with Insta-Bar.',
      },
    ],
    tips: [
      'iJIG Plus+ creates chairside stone model with analogs to skip the intraoral luting step',
      'OPTISPLINT won the JDT WOW! 2025 Award for innovation in verification',
      'Both systems still require technique-sensitive chairside resin application',
      'Consider which approach matches your current workflow: digital-forward or verification-focused',
    ],
    mistakes: [
      {
        title: 'Assuming hybrid systems eliminate resin limitations',
        content:
          'Both iJIG and OPTISPLINT require chairside resin luting. Shrinkage is reduced (especially OPTISPLINT at 3.3%) but not eliminated.',
      },
      {
        title: 'Ignoring chairside time requirements',
        content:
          'Luting sections or scan bodies adds time compared to immediate metal jig verification. Factor this into workflow planning.',
      },
      {
        title: 'Overlooking single-use costs',
        content:
          'OPTISPLINT kits are single patient use at $295-445 each. Compare to reusable metal systems over your annual case volume.',
      },
      {
        title: 'Choosing based on features rather than workflow fit',
        content:
          'The best system matches your practice workflow. Digital-first practices may prefer scannable systems; verification-focused practices may prefer pure metal accuracy.',
      },
    ],
    instaBarHelps: `Insta-Bar offers what hybrid systems cannot: zero resin, zero shrinkage, zero technique sensitivity. While iJIG and OPTISPLINT reduce shrinkage compared to conventional resins, they still require chairside luting with inherent variability. Insta-Bar's pure metal construction provides the most reliable verification with the fastest workflow—assemble, verify, done. For practices prioritizing accuracy and efficiency over digital scanning capability, Insta-Bar delivers unmatched results.`,
  },

  'vs-pic-dental': {
    overview: `PIC Dental pioneered commercial dental photogrammetry in 2010, offering stereo camera systems that achieve 6-micron precision and <4-micron trueness under controlled conditions. With 49+ peer-reviewed publications and 1.4+ million clinical cases, PIC represents the most validated photogrammetry solution. However, equipment costs of $60,000-80,000 and two-device workflow requirements make physical verification jigs like Insta-Bar relevant alternatives for many practices.`,
    whatYouNeed: [
      'Understanding of photogrammetry technology',
      'Assessment of equipment investment capacity',
      'Evaluation of case volume for ROI',
      'Consideration of workflow complexity tolerance',
    ],
    steps: [
      {
        title: 'Understand PIC Technology',
        content:
          'High-precision stereo camera system uses two CCD cameras with infrared flash, capturing 10 extraoral images per second. Working distance 15-30cm with maximum 45-degree capture angle. Capture time under 30 seconds for most full-arch cases. Three form factors: Station (portable), Gravity (mobile cart), System (all-in-one).',
      },
      {
        title: 'Review PIC Accuracy Data',
        content:
          'Published specifications: precision 6 microns, trueness <4 microns. Liu et al. (2024): PIC achieved best trueness (21±4 microns RMS) compared to IOS and open-tray impressions. Accuracy unaffected by implant distribution, distance, or arch length—validated in 10 patients with 6-implant prostheses.',
      },
      {
        title: 'Evaluate Equipment Investment',
        content:
          'PIC systems typically range $60,000-80,000. Legacy system upgrade available at approximately 25% of new system cost. 2025 PIC app enables smartphone-based photogrammetry on iPhone 14 Pro+ with pay-per-use subscription as lower-cost entry point.',
      },
      {
        title: 'Understand Workflow Requirements',
        content:
          'Three-step process: (1) Implant capture with PIC transfers under 30 seconds, (2) Soft tissue capture via IOS or impression, (3) Digital model alignment in CAD software. PIC does NOT capture soft tissue—two-device workflow is mandatory.',
      },
      {
        title: 'Assess Training and Learning Curve',
        content:
          'PIC Pro Training: 3-5 days on-site covering capture techniques, immediate loading protocols, CAD integration. System designed for consistent results regardless of operator experience. However, attention to technique details remains important for optimal results.',
      },
      {
        title: 'Calculate Per-Case Economics',
        content:
          'PIC transfers (proprietary scan bodies) required for each case—pricing requires manufacturer quote. Eliminates impression materials, verification jigs, multiple fit appointments, and remakes. ROI depends heavily on case volume and current remake rate.',
      },
      {
        title: 'Compare to Physical Verification',
        content:
          'PIC provides immediate digital verification with documented accuracy. Physical jigs like Insta-Bar provide tactile confirmation, no equipment investment, immediate use without training, and independence from digital workflow. Some practices use both: PIC for capture, Insta-Bar for physical confirmation.',
      },
    ],
    tips: [
      'PIC app offers lowest barrier to entry for practices exploring photogrammetry',
      'Lab services (e.g., Iverson Dental Labs) offer PIC scanning without equipment purchase',
      '49+ peer-reviewed publications provide extensive scientific validation',
      'Consider physical verification to confirm digital accuracy during workflow transition',
    ],
    mistakes: [
      {
        title: 'Assuming photogrammetry eliminates all verification needs',
        content:
          'Physical try-in provides confirmation that digital data alone cannot. Many practices use both approaches.',
      },
      {
        title: 'Underestimating two-device workflow complexity',
        content:
          'Implant positions (PIC) + soft tissue (IOS) requires CAD file merging. Evaluate your software capabilities.',
      },
      {
        title: 'Purchasing without ROI calculation',
        content:
          '$60,000-80,000 investment requires sufficient full-arch volume. Calculate break-even based on your case mix.',
      },
      {
        title: 'Ignoring proprietary component costs',
        content:
          'PIC transfers are required for each case. Factor ongoing consumable costs into total cost of ownership.',
      },
    ],
    instaBarHelps: `Insta-Bar provides verified accuracy without photogrammetry's equipment investment, proprietary consumables, or two-device workflow complexity. For practices performing 20-50 full-arch cases annually, Insta-Bar's reusable metal components deliver excellent ROI compared to $60,000+ photogrammetry systems. For digital practices with PIC, Insta-Bar serves as physical confirmation—if the metal jig passes Sheffield testing on both patient and PIC-derived model, proceed with confidence in your digital data.`,
  },
};
