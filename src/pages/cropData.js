const cropData = [
  {
    cropName: "Rice (Paddy)",
    bestVarieties: [
      {
        name: "IR36",
        duration: "110-115 days",
        features: "High yielding, disease resistant"
      },
      {
        name: "IR64",
        duration: "115-120 days",
        features: "Good grain quality, suitable for lowlands"
      },
      {
        name: "MTU 7029 (Swarna)",
        duration: "140-145 days",
        features: "High yielding, preferred by farmers"
      },
      {
        name: "BPT 5204 (Samba Mahsuri)",
        duration: "145-150 days",
        features: "Premium quality, high market value"
      }
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Rabi: November-December",
      harvestingTime: "Kharif: October-November, Rabi: March-April",
      totalDuration: "115-150 days depending on variety"
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - Plough field to 20-25 cm depth",
        step2: "Puddling - Till wet field to destroy weeds and level the field",
        step3: "Soil type: Clay loam to heavy clay soils preferred",
        step4: "pH requirements: 5.5-6.5",
        soilTreatment: "Apply organic matter 2-3 weeks before transplanting",
        bedPreparation: "Level the field perfectly for uniform water distribution"
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow pre-germinated seeds directly in puddled soil",
          advantages: [
            "Less labor requirement",
            "Earlier crop maturity",
            "Lower water consumption"
          ],
          disadvantages: [
            "Higher weed problem",
            "Poor crop stand in irregular land",
            "Bird damage risk"
          ]
        },
        transplanting: {
          process: "Transfer 20-25 days old seedlings from nursery to main field",
          advantages: [
            "Better weed control",
            "Uniform crop stand",
            "Higher yield potential"
          ],
          disadvantages: [
            "More labor intensive",
            "Higher cost",
            "Longer crop duration"
          ]
        }
      },
      seedTreatment: {
        fungicideTreatment: "Carbendazim @ 2g/kg of seed",
        preSoaking: "Soak seeds in water for 24 hours, incubate for 24 hours",
        otherTreatments: "Hot water treatment at 52°C for 10 minutes for seed-borne diseases"
      },
      spacing: {
        rowToRow: "20 cm",
        plantToPlant: "15 cm",
        plantingDepth: "2-3 cm for direct seeding, 3-4 cm for transplanting"
      },
      seedingDetails: {
        seedRate: "Direct seeding: 20-25 kg/ha, Transplanting: 12-15 kg/ha",
        seedQuality: "Certified seeds with 80% germination",
        germinationPercent: "Minimum 80% required"
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after transplanting",
          frequency: "Maintain 2-5 cm water level throughout growing period",
          waterRequirement: "1200-1400 mm total water requirement"
        },
        mulching: {
          type: "Not typically required in puddle transplanted rice",
          timing: "NA",
          benefits: ["NA"]
        },
        thinning: {
          timing: "10-15 days after sowing in direct seeded rice",
          process: "Remove excess seedlings maintaining proper spacing",
          finalSpacing: "15-20 cm between plants"
        },
        weeding: {
          firstWeeding: "20-25 days after transplanting",
          frequency: "2-3 times during crop growth",
          method: "Manual or chemical using pre-emergence herbicides"
        }
      },
      interculturalOperations: {
        earthingUp: "Not required in transplanted rice",
        staking: "Not required",
        pruning: "Not required",
        otherOperations: [
          "Beushening in direct seeded rice",
          "Gap filling within 7 days of transplanting",
          "Maintaining water level"
        ]
      }
    },
    fertilizerManagement: {
      basalDose: {
        nitrogen: "40 kg/ha",
        phosphorus: "40 kg/ha",
        potassium: "40 kg/ha"
      },
      topDressing: [
        {
          timing: "30 days after transplanting",
          fertilizer: "Urea 40 kg N/ha"
        },
        {
          timing: "55-60 days after transplanting",
          fertilizer: "Urea 40 kg N/ha"
        }
      ],
      micronutrients: "Zinc sulfate 25 kg/ha before transplanting",
      organicFertilizers: "FYM @ 10-12 tons/ha during land preparation"
    },
    diseases: [
      {
        name: "Blast",
        symptoms: "Diamond-shaped lesions on leaves with gray center",
        solution: "Spray Tricyclazole 75WP @ 0.6g/l water"
      },
      {
        name: "Bacterial Leaf Blight",
        symptoms: "Yellow to white lesions along leaf margins",
        solution: "Use resistant varieties, copper-based fungicides"
      },
      {
        name: "Sheath Blight",
        symptoms: "Oval lesions on leaf sheaths near water level",
        solution: "Spray Hexaconazole 5EC @ 2ml/l water"
      },
      {
        name: "Brown Spot",
        symptoms: "Brown circular spots on leaves and grains",
        solution: "Spray Mancozeb @ 2.5g/l water"
      }
    ]
  }


  , {
    cropName: "Maize (Corn)",
    bestVarieties: [
      {
        name: "DHM-117",
        duration: "95-100 days",
        features: "High yielding hybrid, disease resistant"
      },
      {
        name: "DMH-849",
        duration: "85-90 days",
        features: "Early maturing, drought tolerant"
      },
      {
        name: "Ganga Safed-2",
        duration: "80-85 days",
        features: "White corn, suitable for green cobs"
      },
      {
        name: "HQPM-1",
        duration: "95-100 days",
        features: "Quality protein maize, higher nutritional value"
      }
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Rabi: October-November, Spring: January-February",
      harvestingTime: "After 90-100 days of sowing when cobs turn yellowish",
      totalDuration: "85-100 days depending on variety"
    },
    cropManagement: {
      soilPreparation: {
        step1: "Deep ploughing - 2-3 times to achieve fine tilth",
        step2: "Secondary tillage - Cross harrowing and leveling",
        step3: "Soil type: Well-drained loamy to sandy loam soils preferred",
        step4: "pH requirements: 6.5-7.5",
        soilTreatment: "Apply FYM/compost 3 weeks before sowing",
        bedPreparation: "Make ridges and furrows at 60-75 cm spacing"
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow seeds directly on ridges/flat land at proper spacing",
          advantages: [
            "Less labor intensive",
            "Better root development",
            "No transplanting shock"
          ],
          disadvantages: [
            "More seed requirement",
            "Proper moisture needed for germination",
            "Bird damage risk"
          ]
        },
        transplanting: {
          process: "Not commonly practiced in maize",
          advantages: ["NA"],
          disadvantages: ["NA"]
        }
      },
      seedTreatment: {
        fungicideTreatment: "Thiram or Captan @ 3g/kg of seed",
        preSoaking: "Not recommended",
        otherTreatments: "Imidacloprid 600FS @ 8-10ml/kg seed for stem borer protection"
      },
      spacing: {
        rowToRow: "60-75 cm",
        plantToPlant: "20-25 cm",
        plantingDepth: "5-6 cm"
      },
      seedingDetails: {
        seedRate: "20-25 kg/ha for hybrids, 25-30 kg/ha for composites",
        seedQuality: "Certified hybrid seeds with 90% germination",
        germinationPercent: "Minimum 90% required"
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after sowing if soil is dry",
          frequency: "8-10 days interval depending on soil and climate",
          waterRequirement: "500-600 mm total water requirement"
        },
        mulching: {
          type: "Straw mulch or black plastic mulch",
          timing: "After first irrigation",
          benefits: [
            "Moisture conservation",
            "Weed suppression",
            "Temperature regulation"
          ]
        },
        thinning: {
          timing: "15-20 days after sowing",
          process: "Maintain one plant per hill",
          finalSpacing: "20-25 cm between plants"
        },
        weeding: {
          firstWeeding: "20-25 days after sowing",
          frequency: "2-3 times during crop growth",
          method: "Manual hoeing or herbicide application (Atrazine pre-emergence)"
        }
      },
      interculturalOperations: {
        earthingUp: "30-35 days after sowing",
        staking: "Not required generally",
        pruning: "Remove lower leaves after maturity",
        otherOperations: [
          "De-tasseling in seed production",
          "Gap filling within 10 days",
          "Removal of suckers"
        ]
      }
    },
    fertilizerManagement: {
      basalDose: {
        nitrogen: "60 kg/ha",
        phosphorus: "60 kg/ha",
        potassium: "40 kg/ha"
      },
      topDressing: [
        {
          timing: "25-30 days after sowing",
          fertilizer: "Urea 60 kg N/ha"
        },
        {
          timing: "45-50 days after sowing",
          fertilizer: "Urea 60 kg N/ha"
        }
      ],
      micronutrients: "Zinc sulfate 25 kg/ha and Boron 10 kg/ha if deficient",
      organicFertilizers: "FYM @ 10-12 tons/ha during land preparation"
    },
    diseases: [
      {
        name: "Turcicum Leaf Blight",
        symptoms: "Long, elliptical, grayish-green to brown lesions on leaves",
        solution: "Spray Mancozeb @ 2.5g/l water at 8-10 days interval"
      },
      {
        name: "Maydis Leaf Blight",
        symptoms: "Small, diamond-shaped lesions on leaves",
        solution: "Spray Carbendazim @ 1g/l water"
      },
      {
        name: "Common Rust",
        symptoms: "Small, circular to elongate brown pustules on leaves",
        solution: "Spray Propiconazole @ 1ml/l water"
      },
      {
        name: "Downy Mildew",
        symptoms: "Chlorotic streaks on leaves, white growth on lower surface",
        solution: "Seed treatment with Metalaxyl and spray Ridomil @ 2g/l water"
      },
      {
        name: "Stalk Rot",
        symptoms: "Rotting of stalk near ground level, lodging",
        solution: "Soil treatment with Trichoderma viride and proper drainage"
      }
    ]
  }


  , {
    cropName: "Pearl Millet (Bajra)",
    bestVarieties: [
      {
        name: "HHB 67 Improved",
        duration: "65-70 days",
        features: "Early maturing, drought tolerant, downy mildew resistant"
      },
      {
        name: "GHB 558",
        duration: "75-80 days",
        features: "High yielding, good for dry areas"
      },
      {
        name: "ICMH 356",
        duration: "80-85 days",
        features: "Bold grains, suitable for summer cultivation"
      },
      {
        name: "Pusa Composite 443",
        duration: "85-90 days",
        features: "Dual purpose variety (grain and fodder)"
      }
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Summer: February-March",
      harvestingTime: "65-90 days after sowing when ears turn brown",
      totalDuration: "65-90 days depending on variety"
    },
    cropManagement: {
      soilPreparation: {
        step1: "One deep ploughing followed by 2-3 harrowings",
        step2: "Planking for fine seed bed preparation",
        step3: "Soil type: Sandy loam to loamy soils preferred",
        step4: "pH requirements: 6.5-7.8",
        soilTreatment: "Apply FYM 2 weeks before sowing",
        bedPreparation: "Level field or make ridges at 45-50 cm spacing"
      },
      plantingMethod: {
        directSeeding: {
          process: "Direct sowing in lines or broadcasting",
          advantages: [
            "Quick establishment",
            "Deep root development",
            "Drought tolerance"
          ],
          disadvantages: [
            "Requires optimum soil moisture",
            "Bird damage in early stages",
            "Thinning required"
          ]
        },
        transplanting: {
          process: "Not commonly practiced",
          advantages: ["NA"],
          disadvantages: ["NA"]
        }
      },
      seedTreatment: {
        fungicideTreatment: "Thiram or Carbendazim @ 2g/kg seed",
        preSoaking: "Not recommended",
        otherTreatments: "Metalaxyl @ 6g/kg seed for downy mildew control"
      },
      spacing: {
        rowToRow: "45-50 cm",
        plantToPlant: "15-20 cm",
        plantingDepth: "2.5-3 cm"
      },
      seedingDetails: {
        seedRate: "3.5-4 kg/ha for hybrids, 4-5 kg/ha for varieties",
        seedQuality: "Certified seeds with minimum 85% germination",
        germinationPercent: "Minimum 85% required"
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "If required immediately after sowing",
          frequency: "Critical stages - tillering, flowering, grain filling",
          waterRequirement: "350-400 mm total water requirement"
        },
        mulching: {
          type: "Straw mulch in summer season",
          timing: "After crop establishment",
          benefits: [
            "Moisture conservation",
            "Temperature regulation",
            "Weed suppression"
          ]
        },
        thinning: {
          timing: "15-20 days after sowing",
          process: "Maintain optimal plant population",
          finalSpacing: "15-20 cm between plants"
        },
        weeding: {
          firstWeeding: "20-25 days after sowing",
          frequency: "2 weedings required",
          method: "Manual hoeing or herbicide (Atrazine pre-emergence)"
        }
      },
      interculturalOperations: {
        earthingUp: "30 days after sowing",
        staking: "Not required",
        pruning: "Not required",
        otherOperations: [
          "Gap filling within 10 days",
          "Removal of weak seedlings",
          "Bird scaring during grain filling"
        ]
      }
    },
    fertilizerManagement: {
      basalDose: {
        nitrogen: "40 kg/ha",
        phosphorus: "40 kg/ha",
        potassium: "40 kg/ha"
      },
      topDressing: [
        {
          timing: "25-30 days after sowing",
          fertilizer: "Urea 40 kg N/ha"
        }
      ],
      micronutrients: "Zinc sulfate 25 kg/ha if deficient",
      organicFertilizers: "FYM @ 8-10 tons/ha during land preparation"
    },
    diseases: [
      {
        name: "Downy Mildew",
        symptoms: "Systemic infection, chlorotic streaks, white downy growth",
        solution: "Seed treatment with Metalaxyl, spray Ridomil @ 2g/l water"
      },
      {
        name: "Ergot",
        symptoms: "Honey dew secretion from earheads, black sclerotia",
        solution: "Spray Carbendazim @ 1g/l at flowering stage"
      },
      {
        name: "Smut",
        symptoms: "Black powder in place of grains",
        solution: "Seed treatment with Carboxin @ 2g/kg seed"
      },
      {
        name: "Rust",
        symptoms: "Brown to dark brown pustules on leaves",
        solution: "Spray Mancozeb @ 2.5g/l water"
      }
    ],
    majorPests: [
      {
        name: "Shoot Fly",
        symptoms: "Dead heart in central shoot",
        management: "Early sowing, seed treatment with Imidacloprid"
      },
      {
        name: "Stem Borer",
        symptoms: "Shot holes, dead heart in later stages",
        management: "Whorl application of Carbofuran granules"
      },
      {
        name: "Earhead Worms",
        symptoms: "Caterpillars feeding on developing grains",
        management: "Spray Quinalphos @ 2ml/l at grain filling"
      }
    ]
  }
  , {
    cropName: "Finger Millet (Ragi)",
    bestVarieties: [
      {
        name: "GPU-28",
        duration: "110-115 days",
        features: "High yielding, resistant to blast disease"
      },
      {
        name: "GPU-67",
        duration: "105-110 days",
        features: "Early maturing, suitable for late sowing"
      },
      {
        name: "MR-1",
        duration: "120-125 days",
        features: "Long fingers, drought tolerant"
      },
      {
        name: "ML-365",
        duration: "115-120 days",
        features: "Good grain quality, suitable for different seasons"
      }
    ],
    timePeriod: {
      sowingTime: "Kharif: June-July, Rabi: September-October",
      harvestingTime: "105-125 days after sowing when ears turn brown",
      totalDuration: "105-125 days depending on variety"
    },
    cropManagement: {
      soilPreparation: {
        step1: "2-3 ploughings to achieve fine tilth",
        step2: "Field leveling and making plots of convenient size",
        step3: "Soil type: Red, lateritic, sandy loam to clay loam soils",
        step4: "pH requirements: 6.0-7.5",
        soilTreatment: "Apply FYM 3 weeks before transplanting",
        bedPreparation: "Prepare raised nursery beds for transplanting method"
      },
      plantingMethod: {
        directSeeding: {
          process: "Line sowing or broadcasting in prepared field",
          advantages: [
            "Less labor requirement",
            "No nursery preparation needed",
            "Early crop establishment"
          ],
          disadvantages: [
            "More seed requirement",
            "Difficult weed management",
            "Uneven plant population"
          ]
        },
        transplanting: {
          process: "Transplant 20-25 days old seedlings",
          advantages: [
            "Better crop stand",
            "Efficient water use",
            "Better weed control"
          ],
          disadvantages: [
            "Labor intensive",
            "Higher cost",
            "Requires nursery management"
          ]
        }
      },
      seedTreatment: {
        fungicideTreatment: "Carbendazim @ 2g/kg seed",
        preSoaking: "Not required",
        otherTreatments: "Thiram @ 2.5g/kg seed for blast disease"
      },
      spacing: {
        rowToRow: "22.5-30 cm",
        plantToPlant: "10 cm (transplanting)",
        plantingDepth: "2-3 cm for direct seeding"
      },
      seedingDetails: {
        seedRate: "Direct sowing: 10 kg/ha, Transplanting: 5 kg/ha",
        seedQuality: "Certified seeds with minimum 85% germination",
        germinationPercent: "Minimum 85% required"
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Immediately after transplanting",
          frequency: "7-10 days interval based on soil type",
          waterRequirement: "400-450 mm total water requirement"
        },
        mulching: {
          type: "Straw mulch in direct seeded crop",
          timing: "After crop establishment",
          benefits: [
            "Moisture conservation",
            "Weed suppression",
            "Soil temperature regulation"
          ]
        },
        thinning: {
          timing: "15-20 days after sowing in direct seeded crop",
          process: "Remove excess plants",
          finalSpacing: "10 cm between plants"
        },
        weeding: {
          firstWeeding: "15-20 days after sowing/transplanting",
          frequency: "2-3 weedings required",
          method: "Hand weeding or use of mechanical weeder"
        }
      },
      interculturalOperations: {
        earthingUp: "30-35 days after planting",
        staking: "Not required",
        pruning: "Not required",
        otherOperations: [
          "Gap filling within 7 days of transplanting",
          "Regular field inspection",
          "Removing off-types"
        ]
      }
    },
    fertilizerManagement: {
      basalDose: {
        nitrogen: "25 kg/ha",
        phosphorus: "40 kg/ha",
        potassium: "25 kg/ha"
      },
      topDressing: [
        {
          timing: "25-30 days after transplanting",
          fertilizer: "Urea 25 kg N/ha"
        },
        {
          timing: "45-50 days after transplanting",
          fertilizer: "Urea 25 kg N/ha"
        }
      ],
      micronutrients: "Zinc sulfate 12.5 kg/ha if deficient",
      organicFertilizers: "FYM @ 10 tons/ha during land preparation"
    },
    diseases: [
      {
        name: "Blast",
        symptoms: "Diamond shaped lesions on leaves, neck and fingers",
        solution: "Spray Carbendazim @ 1g/l or Tricyclazole @ 0.6g/l water"
      },
      {
        name: "Brown Spot",
        symptoms: "Oval to circular brown spots on leaves",
        solution: "Spray Mancozeb @ 2.5g/l water"
      },
      {
        name: "Cercospora Leaf Spot",
        symptoms: "Small circular spots with gray center",
        solution: "Spray Carbendazim + Mancozeb @ 2g/l water"
      },
      {
        name: "Foot Rot",
        symptoms: "Rotting at base of tillers, yellowing",
        solution: "Soil drenching with Carbendazim @ 1g/l water"
      }
    ],
    majorPests: [
      {
        name: "Pink Stem Borer",
        symptoms: "Dead heart in central shoot",
        management: "Spray Chlorpyriphos @ 2ml/l water"
      },
      {
        name: "Army Worm",
        symptoms: "Leaves eaten from margins",
        management: "Spray Quinalphos @ 2ml/l water"
      },
      {
        name: "Aphids",
        symptoms: "Yellowing and curling of leaves",
        management: "Spray Dimethoate @ 1.7ml/l water"
      }
    ],
    specialFeatures: {
      droughtTolerance: "High",
      nutritionalValue: {
        calcium: "344mg/100g",
        protein: "7.3g/100g",
        fiber: "3.6g/100g",
        minerals: "2.7g/100g"
      },
      storageQuality: "Excellent, can be stored for long periods",
      valueAddition: [
        "Ragi flour",
        "Ragi malt",
        "Ragi cookies",
        "Health drinks"
      ]
    }
  }
  , {
    cropName: "Sorghum",
    bestVarieties: [
      "M 35-1", // A widely grown variety, resistant to drought
      "SPV 462", // Known for high yield and disease resistance
      "CSH 16", // A popular hybrid with strong drought tolerance
      "CSV 29", // Resistant to water stress and pests
      "Ravi" // A variety with good yield and disease resistance
    ],
    timePeriod: {
      sowingTime: "March to April", // Best time to sow (in most regions)
      harvestingTime: "October to November", // Best time to harvest
      totalDuration: "120-150 days" // Duration from sowing to harvest (can vary based on climate and variety)
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing", // Ensures soil aeration and breaks compacted layers
        step2: "Secondary tillage - field leveling", // Makes the surface even for better seedbed
        step3: "Soil type requirements", // Well-drained loamy soils are preferred
        step4: "pH requirements", // Soil pH should be between 5.5 and 7.5 for optimal growth
        soilTreatment: "Add organic compost or manure to improve soil fertility", // Improve organic content
        bedPreparation: "Prepare raised beds or ridges to ensure proper drainage and aeration" // Helps in water management
      },
      plantingMethod: {
        directSeeding: {
          process: "Direct seeding using a planter or broadcasting seeds evenly across the field", // Sowing directly into the soil
          advantages: [
            "Less labor-intensive",
            "Faster establishment",
            "Lower cost of planting"
          ],
          disadvantages: [
            "Uneven germination in some areas",
            "Seed wastage in windy or heavy rainfall areas"
          ]
        },
        transplanting: {
          process: "Transplant seedlings at 3-4 weeks of age when they have developed strong roots", // Optionally, transplant seedlings grown in a nursery
          advantages: [
            "Better plant establishment",
            "Uniform plant growth",
            "Higher initial survival rate"
          ],
          disadvantages: [
            "Labor-intensive",
            "Higher cost",
            "Time-consuming"
          ]
        }
      },
      seedTreatment: {
        fungicideTreatment: "Treat seeds with a fungicide like carbendazim to prevent fungal diseases like damping-off",
        preSoaking: "Soak seeds in water for 12-24 hours before sowing to improve germination and seed vigor",
        otherTreatments: "Inoculate seeds with Rhizobium bacteria for improved nitrogen fixation and better plant health"
      },
      spacing: {
        rowToRow: "45 cm", // Distance between rows to allow proper root development and space for plant growth
        plantToPlant: "15 cm", // Optimal plant spacing for good air circulation and nutrient uptake
        plantingDepth: "2-3 cm" // Shallow planting ensures good seedling emergence
      },
      seedingDetails: {
        seedRate: "8-10 kg/hectare", // Seed rate based on row-to-row and plant-to-plant spacing
        seedQuality: "Certified seeds with 98% purity and good germination percentage",
        germinationPercent: "90%" // High-quality seeds should have a germination rate of 90% or more
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Water immediately after sowing to ensure proper seed germination",
          frequency: "Once every 7-10 days, depending on weather conditions and soil moisture", // Frequency can be adjusted based on rainfall
          waterRequirement: "400-500 mm of water is needed throughout the crop's growth period"
        },
        mulching: {
          type: "Straw, dry leaves, or plastic mulch", // Organic mulch can help retain moisture and control weeds
          timing: "Apply mulch immediately after sowing to maintain soil moisture and prevent weed growth",
          benefits: [
            "Reduces weed growth",
            "Helps conserve moisture",
            "Maintains consistent soil temperature"
          ]
        },
        thinning: {
          timing: "2-3 weeks after sowing", // Thinning should be done early to avoid overcrowding
          process: "Remove weak, unhealthy, or overcrowded seedlings to allow remaining plants to grow freely",
          finalSpacing: "Maintain 30 cm between plants after thinning for optimal plant growth"
        },
        weeding: {
          firstWeeding: "3 weeks after planting", // Remove weeds that compete for water and nutrients early on
          frequency: "Weed every 3-4 weeks to prevent competition", // Adjust frequency depending on weed growth and weather
          method: "Manual weeding or using mechanical weeders (in larger fields)"
        }
      },
      interculturalOperations: {
        earthingUp: "Light earthing up is done around the plants to support them during their early growth stages", // Provides support for young plants and improves soil structure
        staking: "Not required for sorghum unless growing certain tall varieties", // Usually not necessary unless dealing with lodging-prone varieties
        pruning: "Remove excess tillers to ensure the plant's energy is directed towards the main stem and ears", // Pruning helps in better growth and yield
        otherOperations: [
          "Regular fertilizer application",
          "Pest control",
          "Protection against strong winds or rainfall"
        ]
      }
    },
    fertilizerManagement: {
      basalDose: "30 kg NPK (20:20:0) per hectare", // Apply the basal dose during soil preparation to provide necessary nutrients for early growth
      topDressing: [
        "Top-dress with 20 kg urea per hectare at 30-45 days after sowing", // Nitrogen fertilizer helps in vegetative growth
        "Second top dressing at 60 days to support grain development and growth"
      ],
      micronutrients: "Zinc and boron might be required in soils that are deficient in these micronutrients", // Add if necessary based on soil test
      organicFertilizers: "5-6 tons of well-decomposed compost or farmyard manure per hectare to improve soil health and fertility"
    },
    diseases: [
      {
        name: "Leaf Spot", // Fungal disease affecting leaves
        symptoms: "Small, round lesions with yellow halos on leaves", // Leaves show characteristic spots and yellowing
        solution: "Spray fungicides like Mancozeb or Copper-based fungicides to control the spread of leaf spot"
      },
      {
        name: "Downy Mildew", // Fungal disease affecting the leaves and stems
        symptoms: "Yellowing of leaves and stunted growth, often accompanied by a powdery coating on the undersides of leaves",
        solution: "Spray with systemic fungicides like Metalaxyl or use resistant varieties if available"
      },
      {
        name: "Sorghum Shoot Fly", // Insect pest that affects the growing tip of the plant
        symptoms: "Dead heart and wilting of the plant, stunted growth",
        solution: "Apply insecticides like Dimethoate or treat seeds with an insecticidal seed coating"
      },
      {
        name: "Sorghum Ergot", // A fungal disease that affects the flowering stage
        symptoms: "Swollen, irregular structures at the flowering heads, sometimes resulting in blackened grains",
        solution: "Remove infected flowers or heads and apply appropriate fungicides if necessary"
      }
    ]
  }
  , {
    cropName: "Groundnut",
    bestVarieties: [
      "TMV 2", // Popular variety, commonly used across many regions
      "Chillack-2", // Known for high yield and drought resistance
      "RG 12", // High oil content, suitable for oil extraction
      "K6", // High resistance to foliar diseases
      "Spunta", // Known for early maturity and high pod yield
    ],
    timePeriod: {
      sowingTime: "April to June", // Best sowing time for most regions
      harvestingTime: "August to October", // Harvesting time depends on the maturity
      totalDuration: "120-150 days", // Crop duration from sowing to harvest
    },
    cropManagement: {
      soilPreparation: {
        step1: "Primary tillage - deep plowing", // Ensures aeration and better root development
        step2: "Secondary tillage - field leveling", // Ensures uniform seed bed and proper moisture retention
        step3: "Soil type requirements", // Well-drained sandy loam soils are ideal
        step4: "pH requirements", // pH should be between 6.0 and 6.5 for optimal growth
        soilTreatment: "Add compost or organic manure to improve soil fertility", // Organic treatments for soil enhancement
        bedPreparation: "Prepare raised beds or ridges for proper drainage", // Helps in water management
      },
      plantingMethod: {
        directSeeding: {
          process: "Sow seeds directly into the soil using a planter or by hand broadcasting", // Direct seeding is most common
          advantages: [
            "Lower labor costs",
            "Quick to establish",
          ],
          disadvantages: [
            "Risk of uneven germination in some areas",
            "Seed wastage due to wind or rain"
          ],
        },
        transplanting: {
          process: "Plant seeds in a nursery and transplant seedlings at 3-4 weeks old", // Transplanting is less common for groundnuts but may be used
          advantages: [
            "Better establishment and uniformity in growth",
            "Less seed wastage"
          ],
          disadvantages: [
            "Labor-intensive",
            "Requires more time and resources"
          ]
        }
      },
      seedTreatment: {
        fungicideTreatment: "Treat seeds with fungicides like Captan to prevent soil-borne diseases like wilt and root rot",
        preSoaking: "Soak seeds in water for 12-24 hours before sowing to speed up germination",
        otherTreatments: "Inoculate seeds with Rhizobium bacteria to promote nitrogen fixation for better plant growth"
      },
      spacing: {
        rowToRow: "30-45 cm", // Proper spacing between rows for easy mechanization and air circulation
        plantToPlant: "10-15 cm", // Plant spacing to avoid overcrowding
        plantingDepth: "4-5 cm" // Shallow planting depth to encourage quick emergence
      },
      seedingDetails: {
        seedRate: "40-50 kg/hectare", // Seed rate for sowing based on row-to-row and plant-to-plant spacing
        seedQuality: "Certified seeds with 98% purity",
        germinationPercent: "90%" // Desired germination rate for healthy growth
      },
      initialCare: {
        irrigation: {
          firstIrrigation: "Water immediately after sowing for good seed germination",
          frequency: "Once every 7-10 days during dry spells, especially during flowering and pod formation",
          waterRequirement: "350-450 mm of water for the entire crop growth period"
        },
        mulching: {
          type: "Organic mulches like straw or plastic mulch",
          timing: "Apply mulch immediately after sowing to conserve moisture and prevent weed growth",
          benefits: [
            "Retains soil moisture",
            "Reduces weed growth",
            "Helps in maintaining consistent soil temperature"
          ]
        },
        thinning: {
          timing: "2-3 weeks after sowing to avoid overcrowding",
          process: "Remove weak or crowded plants to give space to stronger plants",
          finalSpacing: "Maintain 10-15 cm between plants after thinning"
        },
        weeding: {
          firstWeeding: "2-3 weeks after sowing to prevent competition for nutrients and moisture",
          frequency: "Weeding should be done every 3-4 weeks until the crop canopy closes",
          method: "Manual weeding or using mechanical weeders"
        }
      },
      interculturalOperations: {
        earthingUp: "Light earthing up around plants after flowering to support growth and facilitate pod development",
        staking: "Not required unless growing tall varieties that may lodge",
        pruning: "Remove excess runners to ensure energy is directed toward pod production",
        otherOperations: [
          "Regular pest and disease control",
          "Fertilizer application"
        ]
      }
    },
    fertilizerManagement: {
      basalDose: "20-30 kg of NPK (20:20:0) per hectare before planting", // Initial fertilizer for early growth
      topDressing: [
        "Top-dress with 20 kg of urea per hectare at 30 days after sowing",
        "Second top-dressing with 20-25 kg of urea per hectare at flowering stage"
      ],
      micronutrients: "Zinc and boron may be required in deficient soils for optimal growth",
      organicFertilizers: "5-6 tons of compost or well-rotted manure per hectare to improve soil health"
    },
    diseases: [
      {
        name: "Rust",
        symptoms: "Small red-brown pustules on the leaves, which can lead to leaf drop",
        solution: "Apply fungicides like Mancozeb or Chlorothalonil to control rust outbreaks"
      },
      {
        name: "Groundnut wilt",
        symptoms: "Yellowing of leaves, wilting, and stunted growth due to root rot",
        solution: "Apply appropriate fungicides and remove infected plants. Ensure well-drained soil"
      },
      {
        name: "Tikka Disease",
        symptoms: "Lesions with a yellow halo on the leaves, leading to premature defoliation",
        solution: "Spray with fungicides like Carbendazim or use resistant varieties"
      },
      {
        name: "White Grub",
        symptoms: "Larvae feed on roots, leading to poor plant growth or even plant death",
        solution: "Apply insecticides like Chlorpyrifos or use biological control methods"
      }
    ]
  }
]

export default cropData;