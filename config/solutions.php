<?php

/*
|--------------------------------------------------------------------------
| Solution detail pages
|--------------------------------------------------------------------------
|
| Each entry powers a standalone page at /solutions/{slug} (see
| App\Http\Controllers\Views\SolutionsController). The copy here is the
| *default* text — every string is editable in place by an admin and the
| override is stored against the page key "solutions.<slug_with_underscores>".
|
| These pages are intentionally not linked from anywhere yet.
|
*/

$img = fn (string $path) => 'https://res.cloudinary.com/dzilc11zf/image/upload/'.$path;

// Reusable "where these clinicians work" blurbs. Each solution picks a
// tailored subset.
$env = [
    'outpatient' => ['title' => 'Outpatient rehabilitation clinics', 'desc' => 'High-volume caseloads that need clinicians who can hit the ground running.'],
    'snf' => ['title' => 'Skilled nursing facilities', 'desc' => 'Sub-acute and long-term care teams focused on functional recovery and safe discharge.'],
    'homecare' => ['title' => 'Home health agencies', 'desc' => 'One-on-one care delivered in the patient’s home across all five boroughs.'],
    'hospital' => ['title' => 'Hospitals & health systems', 'desc' => 'Acute and inpatient rehab units that need fast credentialing and onboarding.'],
    'schools' => ['title' => 'Schools & early intervention', 'desc' => 'IEP-driven caseloads with strict documentation and compliance requirements.'],
    'private' => ['title' => 'Private practices', 'desc' => 'Boutique clinics building out or protecting a specialty service line.'],
];

$whyDefault = [
    ['title' => 'Pre-screened, credential-verified clinicians', 'desc' => 'Every candidate is licence-checked, reference-checked, and interviewed by our clinical team before you ever see a profile.'],
    ['title' => 'Coverage that matches your caseload', 'desc' => 'Per diem, block booking, contract, or permanent placement — scaled up or down as your census moves.'],
    ['title' => 'A local team that knows NYC', 'desc' => 'We staff all five boroughs and understand the settings, payers, and commutes your clinicians actually work in.'],
];

return [

    'physical-therapy' => [
        'name' => 'Physical Therapy Staffing',
        'eyebrow' => 'Staffing Solutions',
        'title' => 'Physical Therapy Staffing',
        'intro' => 'Licensed Physical Therapists, PTAs, and Limited Permit holders who help patients regain movement, strength, and confidence — placed where and when your clinic needs them.',
        'image' => $img('v1782994264/Physical_Therapy_PTs_PTAs_588x600_otilig.webp'),
        'meta_title' => 'Physical Therapy Staffing in NYC | PTs, PTAs & Limited Permits | TNY Staffing',
        'meta_description' => 'Hire experienced Physical Therapists, PTAs, and Licensed Limited Permit holders in New York City. Per diem, contract, and permanent PT staffing for clinics, SNFs, hospitals, and home health.',
        'overview' => [
            'Physical therapy is the backbone of most rehabilitation programs, and a single unfilled PT line can back up your entire schedule. TNY places Physical Therapists, Physical Therapist Assistants, and Licensed Limited Permit holders who specialize in mobility restoration, pain management, and post-surgical recovery.',
            'Whether you need a per diem therapist to cover a sick day or a permanent hire to grow a service line, every clinician is licence-verified and interviewed by our clinical team first — so patient flow stays steady and your existing staff aren’t buried in overflow.',
        ],
        'roles' => [
            ['title' => 'Physical Therapists (PT / DPT)', 'blurb' => 'Full scope of evaluation and treatment across orthopedic, neurologic, and geriatric caseloads.'],
            ['title' => 'Physical Therapist Assistants (PTA)', 'blurb' => 'Skilled treatment delivery under a supervising PT, ideal for high-volume outpatient and SNF settings.'],
            ['title' => 'Licensed Limited Permit holders', 'blurb' => 'Graduates cleared to practice under supervision while awaiting board results — a cost-effective way to add capacity.'],
        ],
        'focus' => [
            'Post-operative and orthopedic rehabilitation',
            'Gait, balance, and fall-risk management',
            'Chronic pain and manual therapy',
            'Neurological recovery and mobility training',
            'Strength, conditioning, and return-to-function programs',
            'Patient and caregiver education',
        ],
        'settings' => [$env['outpatient'], $env['snf'], $env['hospital'], $env['homecare']],
        'why' => $whyDefault,
    ],

    'occupational-therapy' => [
        'name' => 'Occupational Therapy Staffing',
        'eyebrow' => 'Staffing Solutions',
        'title' => 'Occupational Therapy Staffing',
        'intro' => 'OTs and COTAs who help patients rebuild independence in the activities that matter most — from fine motor skills to home safety.',
        'image' => $img('v1782994260/Physical_Therapy_PTs_PTAs_588x374_msie7z.webp'),
        'meta_title' => 'Occupational Therapy Staffing in NYC | OTs & COTAs | TNY Staffing',
        'meta_description' => 'Hire Occupational Therapists and Certified Occupational Therapy Assistants in New York City. Per diem, contract, and permanent OT staffing for outpatient, home care, SNF, and school settings.',
        'overview' => [
            'Occupational therapy turns clinical progress into real-world independence. TNY places OTs and COTAs who focus on fine motor coordination, cognitive function, adaptive equipment, and environmental modification so patients can safely return to daily routines.',
            'Our therapists step into outpatient clinics, homecare visits, skilled nursing units, and school-based caseloads with the documentation discipline each setting demands — and with the empathy that keeps patients engaged in their own recovery.',
        ],
        'roles' => [
            ['title' => 'Occupational Therapists (OT / OTD)', 'blurb' => 'Full evaluation and treatment scope across physical, cognitive, and developmental needs.'],
            ['title' => 'Certified Occupational Therapy Assistants (COTA)', 'blurb' => 'Hands-on treatment delivery under a supervising OT for busy outpatient and SNF caseloads.'],
        ],
        'focus' => [
            'Activities of daily living (ADL) retraining',
            'Fine motor and hand therapy',
            'Cognitive and perceptual rehabilitation',
            'Adaptive equipment and assistive technology',
            'Home safety assessment and modification',
            'Splinting and orthotic fabrication',
        ],
        'settings' => [$env['outpatient'], $env['homecare'], $env['snf'], $env['schools']],
        'why' => $whyDefault,
    ],

    'speech-language-pathology' => [
        'name' => 'Speech-Language Pathology Staffing',
        'eyebrow' => 'Staffing Solutions',
        'title' => 'Speech-Language Pathology Staffing',
        'intro' => 'SLPs and SLPAs who treat communication, cognitive-linguistic, and swallowing disorders across the lifespan.',
        'image' => $img('v1782994261/Speech-Language_Pathologists_Staffing_384x156_et3xr0.webp'),
        'meta_title' => 'Speech-Language Pathology Staffing in NYC | SLPs & SLPAs | TNY Staffing',
        'meta_description' => 'Hire Speech-Language Pathologists and assistants in New York City. Per diem, contract, and permanent SLP staffing for hospitals, SNFs, home health, and schools — including dysphagia and neuro caseloads.',
        'overview' => [
            'Speech-language pathology covers some of the highest-acuity work in rehab — dysphagia management, aphasia, cognitive-communication deficits, and pediatric speech delays. TNY places SLPs and SLPAs who are comfortable evaluating and treating these conditions independently.',
            'From modified barium swallow follow-through in a hospital to early-intervention sessions in a family’s living room, our clinicians deliver outcome-driven care that protects patient safety and keeps your program in compliance.',
        ],
        'roles' => [
            ['title' => 'Speech-Language Pathologists (CCC-SLP)', 'blurb' => 'Independent evaluation and treatment across dysphagia, neuro, voice, and pediatric caseloads.'],
            ['title' => 'Clinical Fellowship (CF-SLP) clinicians', 'blurb' => 'Supervised fellows ready to carry a caseload while completing their clinical fellowship year.'],
            ['title' => 'Speech-Language Pathology Assistants (SLPA)', 'blurb' => 'Treatment support under a supervising SLP for high-volume school and clinic caseloads.'],
        ],
        'focus' => [
            'Dysphagia evaluation and management',
            'Aphasia and cognitive-communication therapy',
            'Motor speech and voice disorders',
            'Pediatric speech and language delay',
            'AAC (augmentative and alternative communication)',
            'Instrumental swallow study follow-through',
        ],
        'settings' => [$env['hospital'], $env['snf'], $env['homecare'], $env['schools']],
        'why' => $whyDefault,
    ],

    'pelvic-floor-therapy' => [
        'name' => 'Pelvic Floor Therapy Staffing',
        'eyebrow' => 'Specialty Staffing',
        'title' => 'Pelvic Floor Therapy Staffing',
        'intro' => 'Therapists with specialized training in pelvic health, core stability, and pre/post-natal recovery.',
        'image' => $img('v1782994258/Pelvic_Floor_Rehabilitation_lovd41.webp'),
        'meta_title' => 'Pelvic Floor Therapy Staffing in NYC | Pelvic Health PTs & OTs | TNY Staffing',
        'meta_description' => 'Add a pelvic floor specialist to your practice. TNY places pelvic health therapists in NYC for incontinence, pelvic pain, and perinatal care — per diem, contract, or permanent.',
        'overview' => [
            'Pelvic floor therapy is one of the fastest-growing specialty service lines in rehab, but qualified clinicians are hard to find and harder to keep. TNY places therapists with dedicated pelvic health training who can discreetly manage pelvic pain, incontinence, and perinatal recovery.',
            'Bringing on a pelvic specialist lets your practice keep referrals in-house, extend care to an underserved population, and improve patient retention — without a long, uncertain recruiting cycle.',
        ],
        'roles' => [
            ['title' => 'Pelvic health Physical Therapists', 'blurb' => 'Advanced training in internal and external pelvic floor evaluation and treatment.'],
            ['title' => 'Pelvic health Occupational Therapists', 'blurb' => 'Functional, whole-person approach to pelvic health, bladder/bowel routines, and return to activity.'],
        ],
        'focus' => [
            'Urinary and bowel incontinence',
            'Pelvic pain and dyspareunia',
            'Prenatal and postpartum rehabilitation',
            'Diastasis recti and core reintegration',
            'Post-surgical pelvic recovery',
            'Bladder and bowel behavioral training',
        ],
        'settings' => [$env['outpatient'], $env['private'], $env['homecare']],
        'why' => $whyDefault,
    ],

    'lymphedema-therapy' => [
        'name' => 'Lymphedema Therapy Staffing',
        'eyebrow' => 'Specialty Staffing',
        'title' => 'Lymphedema Therapy Staffing',
        'intro' => 'Certified Lymphedema Therapists (CLTs) who manage swelling, lymphatic drainage, and long-term maintenance.',
        'image' => $img('v1782994258/lymphedema_therapist_pcmiki.webp'),
        'meta_title' => 'Lymphedema Therapy Staffing in NYC | Certified Lymphedema Therapists | TNY Staffing',
        'meta_description' => 'Hire Certified Lymphedema Therapists (CLT) in New York City. TNY staffs complete decongestive therapy for oncology, vascular, and post-surgical caseloads — per diem, contract, or permanent.',
        'overview' => [
            'Lymphedema management requires certification and a specific skill set — manual lymphatic drainage, compression bandaging, and patient self-management training. TNY places Certified Lymphedema Therapists who deliver complete decongestive therapy and coordinate with oncology and vascular teams.',
            'A CLT on your roster means you can accept post-mastectomy and vascular referrals with confidence, shorten the path from diagnosis to treatment, and reduce complications that drive readmissions.',
        ],
        'roles' => [
            ['title' => 'Certified Lymphedema Therapists (PT-CLT)', 'blurb' => 'Physical therapists with lymphedema certification and complete decongestive therapy experience.'],
            ['title' => 'Certified Lymphedema Therapists (OT-CLT)', 'blurb' => 'Occupational therapists certified in lymphedema management, with a focus on function and self-care.'],
        ],
        'focus' => [
            'Manual lymphatic drainage',
            'Multi-layer compression bandaging',
            'Post-mastectomy and oncology rehabilitation',
            'Chronic venous insufficiency and wound-adjacent care',
            'Compression garment fitting and education',
            'Home program and self-management training',
        ],
        'settings' => [$env['outpatient'], $env['hospital'], $env['homecare']],
        'why' => $whyDefault,
    ],

    'neurological-rehabilitation' => [
        'name' => 'Neurological Rehabilitation Staffing',
        'eyebrow' => 'Specialty Staffing',
        'title' => 'Neurological Rehabilitation Staffing',
        'intro' => 'Clinicians experienced in stroke, brain injury, Parkinson’s, and spinal cord injury recovery.',
        'image' => $img('v1782994258/Neurological_Therapists_lw6ybl.webp'),
        'meta_title' => 'Neurological Rehabilitation Staffing in NYC | Neuro PTs, OTs & SLPs | TNY Staffing',
        'meta_description' => 'Hire neuro-rehab therapists in New York City. TNY places PTs, OTs, and SLPs experienced in stroke, TBI, Parkinson’s, and spinal cord injury — per diem, contract, or permanent.',
        'overview' => [
            'Neurological rehabilitation is complex, long-horizon work that rewards experience. TNY places PTs, OTs, and SLPs who apply advanced neuro-rehab strategies to rebuild motor control, balance, cognition, and daily independence after stroke, TBI, Parkinson’s, and spinal cord injury.',
            'These clinicians integrate into inpatient rehab units, day programs, and home health teams, bringing the pattern recognition and patience that neuro caseloads demand.',
        ],
        'roles' => [
            ['title' => 'Neuro Physical Therapists', 'blurb' => 'Gait, balance, and motor recovery for central nervous system injury and disease.'],
            ['title' => 'Neuro Occupational Therapists', 'blurb' => 'Upper-extremity function, cognition, vision, and ADL retraining after neurological injury.'],
            ['title' => 'Neuro Speech-Language Pathologists', 'blurb' => 'Aphasia, cognitive-communication, and dysphagia management for neuro populations.'],
        ],
        'focus' => [
            'Stroke and CVA recovery',
            'Traumatic and acquired brain injury',
            'Parkinson’s disease and movement disorders (incl. LSVT)',
            'Spinal cord injury rehabilitation',
            'Multiple sclerosis and progressive conditions',
            'Vision, balance, and vestibular involvement',
        ],
        'settings' => [$env['hospital'], $env['outpatient'], $env['homecare'], $env['snf']],
        'why' => $whyDefault,
    ],

    'pediatric-therapy' => [
        'name' => 'Pediatric Therapy Staffing',
        'eyebrow' => 'Specialty Staffing',
        'title' => 'Pediatric Therapy Staffing',
        'intro' => 'Pediatric PTs, OTs, and SLPs specializing in early intervention, sensory integration, and developmental milestones.',
        'image' => $img('v1782994259/PCC_Aides_355x256_ppkic5.webp'),
        'meta_title' => 'Pediatric Therapy Staffing in NYC | Pediatric PTs, OTs & SLPs | TNY Staffing',
        'meta_description' => 'Hire pediatric therapists in New York City. TNY places pediatric PTs, OTs, and SLPs for early intervention, clinics, and schools — per diem, contract, or permanent.',
        'overview' => [
            'Pediatric therapy is its own discipline — developmentally framed, play-based, and family-centered. TNY places pediatric PTs, OTs, and SLPs skilled in sensory integration, motor learning, feeding, and early intervention.',
            'Our clinicians create engaging sessions that move children toward their milestones while keeping families informed and involved, whether the setting is a clinic, a home visit, or a classroom.',
        ],
        'roles' => [
            ['title' => 'Pediatric Physical Therapists', 'blurb' => 'Gross motor development, gait, tone management, and equipment for infants through adolescents.'],
            ['title' => 'Pediatric Occupational Therapists', 'blurb' => 'Fine motor, sensory processing, feeding, and self-care skill development.'],
            ['title' => 'Pediatric Speech-Language Pathologists', 'blurb' => 'Speech and language delay, articulation, fluency, and pediatric feeding.'],
        ],
        'focus' => [
            'Early intervention (birth to three)',
            'Sensory integration and processing',
            'Developmental delay and coordination disorders',
            'Autism spectrum support',
            'Pediatric feeding and oral-motor therapy',
            'Family coaching and home programming',
        ],
        'settings' => [$env['outpatient'], $env['homecare'], $env['schools'], $env['private']],
        'why' => $whyDefault,
    ],

    'vestibular-rehabilitation' => [
        'name' => 'Vestibular Rehabilitation Staffing',
        'eyebrow' => 'Specialty Staffing',
        'title' => 'Vestibular Rehabilitation Staffing',
        'intro' => 'Therapists trained to treat dizziness, vertigo, and balance disorders and to cut fall risk.',
        'image' => $img('v1787249116/08_Vestibular_Rehabilitation_i1oyva.webp'),
        'meta_title' => 'Vestibular Rehabilitation Staffing in NYC | Vestibular PTs & OTs | TNY Staffing',
        'meta_description' => 'Hire vestibular rehab therapists in New York City. TNY staffs clinicians trained in BPPV repositioning, gaze stabilization, and balance retraining — per diem, contract, or permanent.',
        'overview' => [
            'Vestibular rehabilitation is a high-demand niche: patients with dizziness and vertigo are common, but few clinicians are trained to manage them well. TNY places therapists who perform canalith repositioning, gaze stabilization, and habituation programs.',
            'Adding vestibular capability lets you keep ENT and neurology referrals, shorten symptom duration for patients, and reduce the falls and readmissions that unmanaged dizziness causes.',
        ],
        'roles' => [
            ['title' => 'Vestibular Physical Therapists', 'blurb' => 'Assessment and treatment of peripheral and central vestibular dysfunction.'],
            ['title' => 'Vestibular Occupational Therapists', 'blurb' => 'Functional integration of gaze and balance strategies into daily activity.'],
        ],
        'focus' => [
            'BPPV assessment and canalith repositioning',
            'Gaze stabilization and VOR retraining',
            'Habituation for motion sensitivity',
            'Balance retraining and fall prevention',
            'Post-concussion vestibular involvement',
            'Unilateral and bilateral vestibular hypofunction',
        ],
        'settings' => [$env['outpatient'], $env['hospital'], $env['homecare']],
        'why' => $whyDefault,
    ],

    'acupuncture' => [
        'name' => 'Acupuncture Staffing',
        'eyebrow' => 'Integrative Staffing',
        'title' => 'Acupuncture Staffing',
        'intro' => 'Licensed acupuncturists who add evidence-informed pain management and recovery to your practice.',
        'image' => $img('v1787249115/09_Acupuncturists_g0cxzf.webp'),
        'meta_title' => 'Acupuncture Staffing in NYC | Licensed Acupuncturists | TNY Staffing',
        'meta_description' => 'Hire licensed acupuncturists in New York City. TNY places L.Ac. providers for musculoskeletal pain, post-op recovery, and integrative care — per diem, contract, or permanent.',
        'overview' => [
            'Acupuncture pairs naturally with physical rehabilitation. TNY places licensed acupuncturists (L.Ac.) who focus on musculoskeletal pain relief, post-operative recovery, and stress-related conditions as part of a broader plan of care.',
            'An integrative provider on site gives patients a non-pharmacologic option, differentiates your practice, and creates a new revenue line without adding management overhead.',
        ],
        'roles' => [
            ['title' => 'Licensed Acupuncturists (L.Ac.)', 'blurb' => 'State-licensed providers experienced in pain, orthopedic, and wellness caseloads.'],
            ['title' => 'Acupuncturists with dry needling scope', 'blurb' => 'Providers who integrate trigger-point dry needling alongside traditional technique.'],
        ],
        'focus' => [
            'Musculoskeletal and joint pain',
            'Post-surgical recovery support',
            'Headache and migraine management',
            'Stress, sleep, and recovery',
            'Sports and overuse injuries',
            'Adjunct to physical therapy plans of care',
        ],
        'settings' => [$env['outpatient'], $env['private']],
        'why' => $whyDefault,
    ],

    'massage-therapy' => [
        'name' => 'Massage Therapy Staffing',
        'eyebrow' => 'Integrative Staffing',
        'title' => 'Massage Therapy Staffing',
        'intro' => 'Licensed Massage Therapists who speed soft-tissue recovery and improve patient satisfaction.',
        'image' => $img('v1787249115/10_Massage_Therapists_nplz71.webp'),
        'meta_title' => 'Massage Therapy Staffing in NYC | Licensed Massage Therapists | TNY Staffing',
        'meta_description' => 'Hire Licensed Massage Therapists (LMT) in New York City. TNY places LMTs for medical massage, trigger-point, and soft-tissue work alongside rehab — per diem, contract, or permanent.',
        'overview' => [
            'Medical massage is a low-friction way to improve outcomes and the patient experience. TNY places Licensed Massage Therapists who deliver trigger-point work, myofascial release, and circulatory massage that complements an active rehab program.',
            'LMTs handle soft-tissue preparation and recovery so your PTs and OTs can spend their time on skilled, billable treatment — and patients leave each visit feeling progress.',
        ],
        'roles' => [
            ['title' => 'Licensed Massage Therapists (LMT)', 'blurb' => 'Medical and orthopedic massage experience in a rehabilitation context.'],
            ['title' => 'LMTs with manual/sports focus', 'blurb' => 'Deep tissue, sports recovery, and event work for active caseloads.'],
        ],
        'focus' => [
            'Trigger-point and myofascial release',
            'Soft-tissue mobilization pre/post exercise',
            'Circulatory and lymph-supportive massage',
            'Scar and adhesion management',
            'Sports recovery and maintenance',
            'Relaxation and pain-modulation techniques',
        ],
        'settings' => [$env['outpatient'], $env['private']],
        'why' => $whyDefault,
    ],

    'patient-care-coordination' => [
        'name' => 'Patient Care Coordinator & Front Desk Staffing',
        'eyebrow' => 'Operational Staffing',
        'title' => 'Patient Care Coordinator & Front Desk Staffing',
        'intro' => 'The operational engine of a clinic — intake, scheduling, insurance verification, and front-desk communication.',
        'image' => $img('v1787249115/11Patient_Care_Coordinator_Front_Desk_Support_dowdut.webp'),
        'meta_title' => 'Patient Care Coordinator & Front Desk Staffing in NYC | TNY Staffing',
        'meta_description' => 'Hire patient care coordinators and front desk staff for your NYC clinic. TNY places intake, scheduling, and insurance verification support — per diem, contract, or permanent.',
        'overview' => [
            'A clinic runs on its front desk. TNY places patient care coordinators and administrative staff who manage intake, scheduling, insurance verification, authorizations, and patient communication so clinicians can stay clinical.',
            'Whether you need short-term coverage for a leave or a permanent addition as you grow, our coordinators know rehab workflows, EMR systems, and payer requirements — so ramp-up is measured in days, not months.',
        ],
        'roles' => [
            ['title' => 'Patient Care Coordinators', 'blurb' => 'Own the patient journey from first call through discharge, keeping schedules full and authorizations current.'],
            ['title' => 'Front Desk / Reception', 'blurb' => 'Check-in, co-pay collection, scheduling, and a professional first impression.'],
            ['title' => 'Insurance & Authorization Specialists', 'blurb' => 'Eligibility, benefits verification, and prior-authorization management.'],
        ],
        'focus' => [
            'Patient intake and onboarding',
            'Scheduling and template optimization',
            'Insurance verification and prior authorization',
            'EMR data entry and documentation support',
            'Front-desk communication and follow-up',
            'Co-pay collection and daily reconciliation',
        ],
        'settings' => [$env['outpatient'], $env['private'], $env['hospital']],
        'why' => $whyDefault,
    ],

    'school-based-staffing' => [
        'name' => 'School-Based Therapy Staffing',
        'eyebrow' => 'Operational Staffing',
        'title' => 'School-Based Therapy Staffing',
        'intro' => 'Pediatric PTs, OTs, and SLPs qualified to support students under IEP guidelines, with compliant reporting.',
        'image' => $img('v1787249115/12School_Based_Staffing_fudyqw.webp'),
        'meta_title' => 'School-Based Therapy Staffing in NYC | IEP PTs, OTs & SLPs | TNY Staffing',
        'meta_description' => 'Hire school-based therapists in New York City. TNY places pediatric PTs, OTs, and SLPs for IEP caseloads with compliant documentation and reporting — for the school year or per diem.',
        'overview' => [
            'School-based practice has its own rules — IEP goals, Medicaid documentation, mandated timelines, and integration with a teaching team. TNY places pediatric therapists who have done this work and can carry a caseload from day one.',
            'We handle credentialing and compliance paperwork up front so related services stay covered, evaluations stay on schedule, and your district or agency stays audit-ready.',
        ],
        'roles' => [
            ['title' => 'School-based Physical Therapists', 'blurb' => 'Mobility, positioning, and access goals within the educational environment.'],
            ['title' => 'School-based Occupational Therapists', 'blurb' => 'Handwriting, fine motor, sensory, and self-regulation support tied to IEP goals.'],
            ['title' => 'School-based Speech-Language Pathologists', 'blurb' => 'Articulation, language, fluency, and AAC for mandated related services.'],
        ],
        'focus' => [
            'IEP evaluation and goal writing',
            'Push-in and pull-out service delivery',
            'Medicaid and mandated-service documentation',
            'Progress reporting and annual reviews',
            'Assistive technology in the classroom',
            'Collaboration with teachers and families',
        ],
        'settings' => [$env['schools'], $env['homecare']],
        'why' => $whyDefault,
    ],

    'emergency-rapid-staffing' => [
        'name' => 'Emergency & Rapid Staffing',
        'eyebrow' => 'Operational Staffing',
        'title' => 'Emergency & Rapid Staffing',
        'intro' => 'Pre-screened rehab professionals deployed fast — backed by a 24-hour response capability — to prevent operational downtime.',
        'image' => $img('v1787249115/13_Emergency_Rapid_Staffing_s4yzu7.webp'),
        'meta_title' => 'Emergency & Rapid Healthcare Staffing in NYC | 24-Hour Response | TNY Staffing',
        'meta_description' => 'Fill sudden gaps fast. TNY deploys pre-screened PTs, OTs, and SLPs across NYC on short notice for sick calls, leaves, and caseload surges — with 24-hour response.',
        'overview' => [
            'A sudden leave, a spike in census, or a resignation shouldn’t force you to cancel patients. TNY keeps a bench of pre-screened, credential-verified rehab professionals ready to deploy across New York City on short notice.',
            'Because screening and reference checks are already done, we can move from your call to a confirmed clinician quickly — often same-day — and keep coverage in place for as long as the gap lasts.',
        ],
        'roles' => [
            ['title' => 'On-call Physical Therapists & PTAs', 'blurb' => 'Immediate coverage for outpatient, SNF, and inpatient caseloads.'],
            ['title' => 'On-call Occupational Therapists & COTAs', 'blurb' => 'Short-notice coverage that keeps ADL and functional programs running.'],
            ['title' => 'On-call Speech-Language Pathologists', 'blurb' => 'Rapid coverage for dysphagia and neuro caseloads that can’t wait.'],
        ],
        'focus' => [
            '24-hour response for urgent requests',
            'Same-day and next-day placements',
            'Sick-call and unplanned-leave coverage',
            'Census surge and seasonal demand',
            'Bridge coverage during permanent recruiting',
            'Pre-credentialed clinicians ready to start',
        ],
        'settings' => [$env['outpatient'], $env['snf'], $env['hospital'], $env['homecare']],
        'why' => [
            ['title' => 'A ready bench, not a fresh search', 'desc' => 'Clinicians are screened and reference-checked before you call, so placement is a matching exercise — not a recruiting cycle.'],
            ['title' => '24-hour response', 'desc' => 'Urgent requests get a same-day answer and, in most cases, a confirmed clinician within one business day.'],
            ['title' => 'Coverage for as long as it takes', 'desc' => 'A single shift, a two-week leave, or bridge coverage while you hire — we scale to the gap.'],
        ],
    ],

];
