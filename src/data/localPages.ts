import type { LocalAreaPage } from './seoTypes'

const BASE = 'https://peinturemtl.ca'

interface AreaDef {
  en: string
  fr: string
  es: string
  slugEn: string
  slugFr: string
  slugEs: string
  intro: {
    en: string
    fr: string
    es: string
  }
  faqs: {
    en: Array<{ q: string; a: string }>
    fr: Array<{ q: string; a: string }>
    es: Array<{ q: string; a: string }>
  }
}

const AREAS: AreaDef[] = [
  {
    en: 'Plateau-Mont-Royal', fr: 'Plateau-Mont-Royal', es: 'Plateau-Mont-Royal',
    slugEn: 'painters-plateau-mont-royal',
    slugFr: 'peintre-plateau-mont-royal',
    slugEs: 'pintores-plateau-mont-royal',
    intro: {
      en: 'The Plateau-Mont-Royal is one of Montréal\'s most distinctive neighbourhoods — heritage duplexes, winding staircases, plaster walls, and an architectural character that deserves to be treated with care. Peinture MTL works regularly in the Plateau and understands the specific surface types, building constraints, and character details that make this neighbourhood unique.',
      fr: 'Le Plateau-Mont-Royal est l\'un des quartiers les plus distinctifs de Montréal — duplex patrimoniaux, escaliers sinueux, murs en plâtre et un caractère architectural qui mérite d\'être traité avec soin. Peinture MTL travaille régulièrement dans le Plateau et connaît les types de surfaces spécifiques et les contraintes architecturales de ce quartier.',
      es: 'El Plateau-Mont-Royal es uno de los barrios más distintivos de Montreal — dúplex patrimoniales, escaleras sinuosas, paredes de yeso y un carácter arquitectónico que merece ser tratado con cuidado. Peinture MTL trabaja regularmente en el Plateau y entiende los tipos de superficies específicos y las restricciones del edificio.',
    },
    faqs: {
      en: [
        { q: 'Do you work in Plateau-Mont-Royal duplexes?', a: 'Yes. Plateau duplexes are one of the most common property types we paint — interior and exterior, including the characteristic external staircases.' },
        { q: 'Can you paint plaster walls in older Plateau homes?', a: 'Yes. We have experience with pre-war plaster walls, which require different preparation and materials than modern drywall.' },
        { q: 'Do you offer exterior staircase painting in the Plateau?', a: 'Yes. The iconic external staircases of the Plateau require specific coatings rated for weather exposure and foot traffic. We handle both wood and metal.' },
      ],
      fr: [
        { q: 'Travaillez-vous dans les duplex du Plateau-Mont-Royal?', a: 'Oui. Les duplex du Plateau sont l\'un des types de propriétés les plus courants que nous peignons — intérieur et extérieur, incluant les escaliers extérieurs caractéristiques.' },
        { q: 'Pouvez-vous peindre les murs en plâtre dans les vieilles maisons du Plateau?', a: 'Oui. Nous avons l\'expérience des murs en plâtre d\'avant-guerre, qui nécessitent une préparation et des matériaux différents du gypse moderne.' },
        { q: 'Faites-vous la peinture des escaliers extérieurs dans le Plateau?', a: 'Oui. Les escaliers extérieurs emblématiques du Plateau nécessitent des revêtements spécifiques adaptés aux intempéries et au trafic piétonnier.' },
      ],
      es: [
        { q: '¿Trabajan en dúplex del Plateau-Mont-Royal?', a: 'Sí. Los dúplex del Plateau son uno de los tipos de propiedades más comunes que pintamos — interior y exterior, incluyendo las características escaleras exteriores.' },
        { q: '¿Pueden pintar paredes de yeso en casas antiguas del Plateau?', a: 'Sí. Tenemos experiencia con paredes de yeso de antes de la guerra, que requieren preparación y materiales diferentes al drywall moderno.' },
        { q: '¿Ofrecen pintura de escaleras exteriores en el Plateau?', a: 'Sí. Las icónicas escaleras exteriores del Plateau requieren recubrimientos específicos calificados para exposición climática y tráfico peatonal.' },
      ],
    },
  },
  {
    en: 'Mile End', fr: 'Mile End', es: 'Mile End',
    slugEn: 'painters-mile-end',
    slugFr: 'peintre-mile-end',
    slugEs: 'pintores-mile-end',
    intro: {
      en: 'Mile End blends residential streets, converted industrial spaces, and creative studios in a compact, walkable neighbourhood. Peinture MTL works on the diverse range of properties in Mile End — from century-old row houses to loft conversions — with the same standard of preparation and finish on every project.',
      fr: 'Mile End mêle rues résidentielles, espaces industriels convertis et studios créatifs dans un quartier compact et animé. Peinture MTL travaille sur la grande variété de propriétés de Mile End — des rangées de maisons centenaires aux conversions de lofts — avec le même standard de préparation et de finition.',
      es: 'Mile End combina calles residenciales, espacios industriales convertidos y estudios creativos en un barrio compacto y animado. Peinture MTL trabaja en la diversa gama de propiedades en Mile End — desde casas centenarias hasta conversiones de lofts.',
    },
    faqs: {
      en: [
        { q: 'Do you paint lofts and converted commercial spaces in Mile End?', a: 'Yes. We regularly work on converted loft spaces that often feature exposed brick, high ceilings, and industrial surfaces requiring specific preparation approaches.' },
        { q: 'Can you work in a building with limited elevator access?', a: 'Yes. We plan material logistics for buildings without elevators or with restricted access, adjusting our setup accordingly.' },
      ],
      fr: [
        { q: 'Peignez-vous les lofts et espaces commerciaux convertis à Mile End?', a: 'Oui. Nous travaillons régulièrement dans des lofts convertis qui présentent souvent de la brique apparente, de hauts plafonds et des surfaces industrielles.' },
        { q: 'Pouvez-vous travailler dans un bâtiment sans ascenseur?', a: 'Oui. Nous planifions la logistique des matériaux pour les bâtiments sans ascenseur ou avec accès restreint.' },
      ],
      es: [
        { q: '¿Pintan lofts y espacios comerciales convertidos en Mile End?', a: 'Sí. Trabajamos regularmente en espacios loft convertidos que a menudo cuentan con ladrillo expuesto, techos altos y superficies industriales.' },
        { q: '¿Pueden trabajar en un edificio con acceso de ascensor limitado?', a: 'Sí. Planificamos la logística de materiales para edificios sin ascensores o con acceso restringido.' },
      ],
    },
  },
  {
    en: 'Outremont', fr: 'Outremont', es: 'Outremont',
    slugEn: 'painters-outremont',
    slugFr: 'peintre-outremont',
    slugEs: 'pintores-outremont',
    intro: {
      en: 'Outremont\'s larger homes, stone facades, and well-established residential streets call for a painting company that matches the neighbourhood\'s standard. Peinture MTL works in Outremont with the precision and care that these properties require — interior and exterior work done cleanly, on time, and to a high standard.',
      fr: 'Les grandes maisons d\'Outremont, les façades en pierre et les rues résidentielles bien établies appellent une compagnie de peinture à la hauteur des exigences du quartier. Peinture MTL travaille à Outremont avec la précision et le soin qu\'exigent ces propriétés.',
      es: 'Las grandes casas de Outremont, las fachadas de piedra y las calles residenciales bien establecidas requieren una empresa de pintura que esté a la altura de los estándares del barrio. Peinture MTL trabaja en Outremont con la precisión y el cuidado que estas propiedades requieren.',
    },
    faqs: {
      en: [
        { q: 'Do you paint stone and masonry exteriors in Outremont?', a: 'Yes. We work on stone, brick, and masonry exteriors using appropriate breathable coatings and careful surface preparation.' },
        { q: 'Can you match specific heritage colours for Outremont homes?', a: 'Yes. We work with colour codes and can source heritage-appropriate colours from Benjamin Moore, Sherwin-Williams, and specialty lines.' },
      ],
      fr: [
        { q: 'Peignez-vous les façades en pierre et maçonnerie à Outremont?', a: 'Oui. Nous travaillons sur les façades en pierre, brique et maçonnerie en utilisant des revêtements respirants appropriés.' },
        { q: 'Pouvez-vous reproduire des couleurs patrimoniales pour les maisons d\'Outremont?', a: 'Oui. Nous travaillons avec des codes couleur et pouvons sourcer des couleurs adaptées au patrimoine.' },
      ],
      es: [
        { q: '¿Pintan exteriores de piedra y mampostería en Outremont?', a: 'Sí. Trabajamos en exteriores de piedra, ladrillo y mampostería usando recubrimientos transpirables apropiados.' },
        { q: '¿Pueden igualar colores patrimoniales para casas de Outremont?', a: 'Sí. Trabajamos con códigos de color y podemos conseguir colores apropiados para el patrimonio.' },
      ],
    },
  },
  {
    en: 'Westmount', fr: 'Westmount', es: 'Westmount',
    slugEn: 'painters-westmount',
    slugFr: 'peintre-westmount',
    slugEs: 'pintores-westmount',
    intro: {
      en: 'Westmount\'s distinguished homes, mature gardens, and high expectations make it one of Montréal\'s most demanding neighbourhoods for residential painting. Peinture MTL serves Westmount with the level of detail, preparation, and professionalism that clients in this neighbourhood expect — from large exterior repaints to careful interior refreshes.',
      fr: 'Les maisons distinguées de Westmount, les jardins matures et les exigences élevées en font l\'un des quartiers résidentiels les plus exigeants de Montréal pour la peinture. Peinture MTL dessert Westmount avec le niveau de détail, de préparation et de professionnalisme qu\'attendent les clients de ce quartier.',
      es: 'Las distinguidas casas de Westmount, sus jardines maduros y sus altas expectativas lo convierten en uno de los barrios residenciales más exigentes de Montreal para pintura. Peinture MTL sirve a Westmount con el nivel de detalle, preparación y profesionalismo que esperan los clientes de este barrio.',
    },
    faqs: {
      en: [
        { q: 'Do you work with interior designers on Westmount projects?', a: 'Yes. We regularly collaborate with designers and decorators, working from provided specifications and coordinating access with household staff when applicable.' },
        { q: 'Can you paint large Westmount homes discreetly and efficiently?', a: 'Yes. We staff these projects appropriately, work within agreed schedules, and maintain a professional presence throughout.' },
      ],
      fr: [
        { q: 'Travaillez-vous avec des designers d\'intérieur sur des projets à Westmount?', a: 'Oui. Nous collaborons régulièrement avec des designers et décorateurs en suivant leurs spécifications et en coordonnant l\'accès avec le personnel domestique si nécessaire.' },
        { q: 'Pouvez-vous peindre de grandes maisons à Westmount discrètement?', a: 'Oui. Nous dotons ces projets d\'effectifs adéquats, travaillons selon les horaires convenus et maintenons une présence professionnelle.' },
      ],
      es: [
        { q: '¿Trabajan con diseñadores de interiores en proyectos de Westmount?', a: 'Sí. Colaboramos regularmente con diseñadores y decoradores, trabajando con especificaciones proporcionadas.' },
        { q: '¿Pueden pintar grandes casas de Westmount de manera discreta?', a: 'Sí. Dotamos estos proyectos de personal apropiado y trabajamos dentro de horarios acordados.' },
      ],
    },
  },
  {
    en: 'Griffintown', fr: 'Griffintown', es: 'Griffintown',
    slugEn: 'painters-griffintown',
    slugFr: 'peintre-griffintown',
    slugEs: 'pintores-griffintown',
    intro: {
      en: 'Griffintown\'s rapid development has brought thousands of new condo units, loft conversions, and mixed-use buildings to a neighbourhood that is still defining itself. Peinture MTL works extensively in Griffintown — new builds, resale condos, and commercial spaces — with efficient scheduling and clean results for a neighbourhood that never slows down.',
      fr: 'Le développement rapide de Griffintown a apporté des milliers de nouvelles unités de condo, des conversions de lofts et des immeubles à usage mixte. Peinture MTL travaille abondamment à Griffintown — nouvelles constructions, condos de revente et espaces commerciaux — avec une planification efficace et des résultats propres.',
      es: 'El rápido desarrollo de Griffintown ha traído miles de nuevas unidades de condominios, conversiones de lofts y edificios de uso mixto. Peinture MTL trabaja extensamente en Griffintown con programación eficiente y resultados limpios.',
    },
    faqs: {
      en: [
        { q: 'Do you paint new condos in Griffintown before move-in?', a: 'Yes. Pre-move-in painting for new condos is a common request in Griffintown. We work efficiently to meet closing and move-in timelines.' },
        { q: 'Can you handle commercial painting for Griffintown businesses?', a: 'Yes. Retail, restaurant, and office spaces in Griffintown are regular projects for our commercial team.' },
      ],
      fr: [
        { q: 'Peignez-vous les nouveaux condos à Griffintown avant l\'emménagement?', a: 'Oui. La peinture pré-emménagement pour les nouveaux condos est une demande courante à Griffintown. Nous travaillons efficacement.' },
        { q: 'Gérez-vous la peinture commerciale pour les commerces de Griffintown?', a: 'Oui. Les espaces de commerce de détail, restaurants et bureaux à Griffintown sont des projets réguliers pour notre équipe commerciale.' },
      ],
      es: [
        { q: '¿Pintan nuevos condos en Griffintown antes de la mudanza?', a: 'Sí. La pintura pre-mudanza para nuevos condos es una solicitud común en Griffintown. Trabajamos eficientemente para cumplir con los plazos.' },
        { q: '¿Pueden manejar pintura comercial para negocios de Griffintown?', a: 'Sí. Espacios comerciales, restaurantes y oficinas en Griffintown son proyectos regulares para nuestro equipo comercial.' },
      ],
    },
  },
  {
    en: 'Old Montréal', fr: 'Vieux-Montréal', es: 'Viejo Montreal',
    slugEn: 'painters-old-montreal',
    slugFr: 'peintre-vieux-montreal',
    slugEs: 'pintores-viejo-montreal',
    intro: {
      en: 'Old Montréal\'s heritage buildings, stone facades, and high-traffic commercial spaces require a painting company that understands both the aesthetic expectations and the practical constraints of working in a heritage neighbourhood. Peinture MTL has experience with the stone, plaster, and masonry surfaces common throughout Vieux-Montréal.',
      fr: 'Les bâtiments patrimoniaux, les façades en pierre et les espaces commerciaux très fréquentés du Vieux-Montréal nécessitent une compagnie de peinture qui comprend les exigences esthétiques et les contraintes pratiques. Peinture MTL a l\'expérience des surfaces en pierre, plâtre et maçonnerie typiques du Vieux-Montréal.',
      es: 'Los edificios patrimoniales del Viejo Montreal, las fachadas de piedra y los espacios comerciales de alto tráfico requieren una empresa de pintura que entienda las expectativas estéticas y las restricciones prácticas. Peinture MTL tiene experiencia con las superficies de piedra, yeso y mampostería comunes en el Vieux-Montréal.',
    },
    faqs: {
      en: [
        { q: 'Do you work in heritage buildings in Old Montréal?', a: 'Yes. We have experience with the stone, plaster, and masonry surfaces found in Old Montréal heritage buildings, and are familiar with the care required for these surfaces.' },
        { q: 'Can you paint commercial spaces in Old Montréal around business hours?', a: 'Yes. We schedule around your operating hours, including evening and weekend work for commercial properties.' },
      ],
      fr: [
        { q: 'Travaillez-vous dans les bâtiments patrimoniaux du Vieux-Montréal?', a: 'Oui. Nous avons l\'expérience des surfaces en pierre, plâtre et maçonnerie des bâtiments patrimoniaux du Vieux-Montréal.' },
        { q: 'Pouvez-vous peindre des espaces commerciaux selon les heures d\'affaires?', a: 'Oui. Nous planifions selon vos heures d\'exploitation, y compris les travaux en soirée et en fin de semaine.' },
      ],
      es: [
        { q: '¿Trabajan en edificios patrimoniales del Viejo Montreal?', a: 'Sí. Tenemos experiencia con las superficies de piedra, yeso y mampostería que se encuentran en los edificios patrimoniales del Vieux-Montréal.' },
        { q: '¿Pueden pintar espacios comerciales del Viejo Montreal alrededor del horario comercial?', a: 'Sí. Programamos alrededor de su horario operativo, incluyendo trabajo nocturno y de fin de semana.' },
      ],
    },
  },
  {
    en: 'NDG', fr: 'NDG', es: 'NDG',
    slugEn: 'painters-ndg',
    slugFr: 'peintre-ndg',
    slugEs: 'pintores-ndg',
    intro: {
      en: 'Notre-Dame-de-Grâce is a well-established, family-oriented neighbourhood with a diverse mix of housing — post-war bungalows, brick duplexes, and apartment buildings. Peinture MTL serves NDG homeowners and landlords with reliable residential painting services, interior and exterior.',
      fr: 'Notre-Dame-de-Grâce est un quartier bien établi et familial avec une grande variété de logements — bungalows d\'après-guerre, duplex en brique et immeubles d\'appartements. Peinture MTL dessert les propriétaires de NDG avec des services de peinture résidentielle fiables, intérieurs et extérieurs.',
      es: 'Notre-Dame-de-Grâce es un barrio bien establecido y orientado a familias con una mezcla diversa de viviendas — bungalows de posguerra, dúplex de ladrillo y edificios de apartamentos. Peinture MTL sirve a los propietarios de NDG con servicios de pintura residencial confiables.',
    },
    faqs: {
      en: [
        { q: 'Do you paint bungalows and post-war homes in NDG?', a: 'Yes. Post-war homes in NDG often need full exterior repaints and interior refreshes. We handle these efficiently with appropriate products for those surface types.' },
        { q: 'Do you work with NDG landlords for rental property painting?', a: 'Yes. We regularly work with landlords in NDG to paint units between tenants, with efficient turnaround and competitive pricing for repeat clients.' },
      ],
      fr: [
        { q: 'Peignez-vous les bungalows et maisons d\'après-guerre à NDG?', a: 'Oui. Les maisons d\'après-guerre à NDG nécessitent souvent une repeinture extérieure complète et un rafraîchissement intérieur. Nous les traitons efficacement.' },
        { q: 'Travaillez-vous avec les propriétaires bailleurs de NDG?', a: 'Oui. Nous travaillons régulièrement avec les propriétaires de NDG pour peindre les logements entre les locataires.' },
      ],
      es: [
        { q: '¿Pintan bungalows y casas de posguerra en NDG?', a: 'Sí. Las casas de posguerra en NDG a menudo necesitan repinturas exteriores completas y refresco de interiores.' },
        { q: '¿Trabajan con propietarios de alquiler de NDG?', a: 'Sí. Trabajamos regularmente con propietarios en NDG para pintar unidades entre inquilinos.' },
      ],
    },
  },
  {
    en: 'Rosemont', fr: 'Rosemont', es: 'Rosemont',
    slugEn: 'painters-rosemont',
    slugFr: 'peintre-rosemont',
    slugEs: 'pintores-rosemont',
    intro: {
      en: 'Rosemont–La Petite-Patrie is a vibrant neighbourhood with a dense stock of duplexes, triplexes, and single-family homes that represent the heart of Montréal\'s residential character. Peinture MTL works regularly in Rosemont, from interior refreshes in tight duplex units to full exterior repaints on brick and siding facades.',
      fr: 'Rosemont–La Petite-Patrie est un quartier animé avec un parc dense de duplex, triplex et maisons unifamiliales représentant le cœur du caractère résidentiel montréalais. Peinture MTL travaille régulièrement à Rosemont, des rafraîchissements intérieurs dans les unités de duplex aux repeintures extérieures complètes.',
      es: 'Rosemont–La Petite-Patrie es un barrio vibrante con un denso stock de dúplex, tríplex y casas unifamiliares que representan el corazón del carácter residencial de Montreal. Peinture MTL trabaja regularmente en Rosemont.',
    },
    faqs: {
      en: [
        { q: 'Do you paint triplexes and duplexes in Rosemont?', a: 'Yes. Multi-unit residential properties in Rosemont are some of our most common projects — we coordinate across units efficiently.' },
        { q: 'Can you paint exterior brick facades in Rosemont?', a: 'Yes. Brick painting in Rosemont is a frequent request. We use masonry-appropriate breathable coatings and properly prepare the surface.' },
      ],
      fr: [
        { q: 'Peignez-vous les triplex et duplex à Rosemont?', a: 'Oui. Les immeubles résidentiels multi-logements à Rosemont comptent parmi nos projets les plus courants.' },
        { q: 'Pouvez-vous peindre les façades en brique à Rosemont?', a: 'Oui. La peinture de brique à Rosemont est une demande fréquente. Nous utilisons des revêtements respirants adaptés à la maçonnerie.' },
      ],
      es: [
        { q: '¿Pintan tríplex y dúplex en Rosemont?', a: 'Sí. Las propiedades residenciales multiunitarias en Rosemont son algunos de nuestros proyectos más comunes.' },
        { q: '¿Pueden pintar fachadas de ladrillo exterior en Rosemont?', a: 'Sí. La pintura de ladrillo en Rosemont es una solicitud frecuente. Usamos recubrimientos transpirables apropiados para mampostería.' },
      ],
    },
  },
  {
    en: 'Verdun', fr: 'Verdun', es: 'Verdun',
    slugEn: 'painters-verdun',
    slugFr: 'peintre-verdun',
    slugEs: 'pintores-verdun',
    intro: {
      en: 'Verdun has undergone significant transformation over the past decade, with a growing mix of long-established working-class homes and newly renovated properties attracting a younger demographic. Peinture MTL serves Verdun homeowners, investors, and businesses with painting services suited to the neighbourhood\'s evolving character.',
      fr: 'Verdun a subi une transformation significative au cours de la dernière décennie, avec un mélange croissant de maisons ouvrières bien établies et de propriétés nouvellement rénovées. Peinture MTL dessert les propriétaires, investisseurs et entreprises de Verdun.',
      es: 'Verdun ha experimentado una transformación significativa en la última década, con una creciente mezcla de casas obreras establecidas y propiedades recién renovadas. Peinture MTL sirve a propietarios, inversores y negocios de Verdun.',
    },
    faqs: {
      en: [
        { q: 'Do you work with investors renovating rental properties in Verdun?', a: 'Yes. Investment property painting in Verdun is a regular part of our work — efficient turnarounds, clean results, competitive pricing for ongoing work.' },
        { q: 'Do you paint commercial storefronts in Verdun?', a: 'Yes. Commercial painting for small businesses and storefronts along Wellington and other Verdun commercial streets is part of our service area.' },
      ],
      fr: [
        { q: 'Travaillez-vous avec des investisseurs qui rénovent des immeubles locatifs à Verdun?', a: 'Oui. La peinture de propriétés d\'investissement à Verdun est un aspect régulier de notre travail.' },
        { q: 'Peignez-vous les vitrines commerciales à Verdun?', a: 'Oui. La peinture commerciale pour les petites entreprises le long de Wellington et d\'autres rues commerciales de Verdun fait partie de notre zone de service.' },
      ],
      es: [
        { q: '¿Trabajan con inversores que renovan propiedades de alquiler en Verdun?', a: 'Sí. La pintura de propiedades de inversión en Verdun es una parte regular de nuestro trabajo.' },
        { q: '¿Pintan vitrinas comerciales en Verdun?', a: 'Sí. La pintura comercial para pequeños negocios a lo largo de Wellington y otras calles comerciales de Verdun es parte de nuestra área de servicio.' },
      ],
    },
  },
  {
    en: 'Ville-Marie', fr: 'Ville-Marie', es: 'Ville-Marie',
    slugEn: 'painters-ville-marie',
    slugFr: 'peintre-ville-marie',
    slugEs: 'pintores-ville-marie',
    intro: {
      en: 'Ville-Marie — Montréal\'s downtown core — is home to high-rise condos, commercial towers, heritage buildings, and everything in between. Peinture MTL serves Ville-Marie with both residential and commercial painting, including downtown condo units and ground-floor commercial spaces.',
      fr: 'Ville-Marie — le centre-ville de Montréal — abrite des condos en hauteur, des tours commerciales, des bâtiments patrimoniaux et tout ce qui se trouve entre les deux. Peinture MTL dessert Ville-Marie avec la peinture résidentielle et commerciale.',
      es: 'Ville-Marie — el centro de Montreal — alberga condominios de gran altura, torres comerciales, edificios patrimoniales y todo lo que hay entre medias. Peinture MTL sirve a Ville-Marie con pintura residencial y comercial.',
    },
    faqs: {
      en: [
        { q: 'Do you paint high-rise condos in downtown Montréal?', a: 'Yes. We work in high-rise buildings throughout Ville-Marie, managing building-specific access requirements and elevator bookings.' },
        { q: 'Do you handle commercial painting in the downtown core?', a: 'Yes. Office spaces, retail floors, and commercial interiors in the downtown core are regular projects for our commercial team.' },
      ],
      fr: [
        { q: 'Peignez-vous des condos en hauteur au centre-ville de Montréal?', a: 'Oui. Nous travaillons dans des immeubles de grande hauteur dans Ville-Marie en gérant les exigences d\'accès spécifiques aux bâtiments.' },
        { q: 'Gérez-vous la peinture commerciale au centre-ville?', a: 'Oui. Les espaces de bureau, planchers de vente au détail et intérieurs commerciaux sont des projets réguliers.' },
      ],
      es: [
        { q: '¿Pintan condominios de gran altura en el centro de Montreal?', a: 'Sí. Trabajamos en edificios de gran altura en Ville-Marie, gestionando requisitos de acceso específicos del edificio.' },
        { q: '¿Manejan pintura comercial en el centro de la ciudad?', a: 'Sí. Espacios de oficina, pisos de venta al por menor e interiores comerciales son proyectos regulares.' },
      ],
    },
  },
  {
    en: 'Laval', fr: 'Laval', es: 'Laval',
    slugEn: 'painters-laval',
    slugFr: 'peintre-laval',
    slugEs: 'pintores-laval',
    intro: {
      en: 'Laval\'s suburban neighbourhoods, new construction, and growing commercial zones make it a significant part of our service area. Peinture MTL serves Laval homeowners and businesses with the same quality and professionalism as our Montréal island work — interior, exterior, residential, and commercial.',
      fr: 'Les quartiers suburbains de Laval, la nouvelle construction et les zones commerciales en expansion en font une partie importante de notre zone de service. Peinture MTL dessert les propriétaires et entreprises de Laval avec la même qualité et le même professionnalisme que notre travail sur l\'île de Montréal.',
      es: 'Los barrios suburbanos de Laval, la nueva construcción y las zonas comerciales en crecimiento lo convierten en una parte significativa de nuestra área de servicio. Peinture MTL sirve a propietarios y negocios de Laval con la misma calidad y profesionalismo.',
    },
    faqs: {
      en: [
        { q: 'Do you serve all of Laval?', a: 'Yes. We cover all of Laval including Chomedey, Vimont, Auteuil, Laval-des-Rapides, and other sectors.' },
        { q: 'Do you paint new construction homes in Laval?', a: 'Yes. New construction painting in Laval is a regular part of our work, including priming, base coats, and full interior finishes for newly built homes.' },
      ],
      fr: [
        { q: 'Desservez-vous tout Laval?', a: 'Oui. Nous couvrons tout Laval incluant Chomedey, Vimont, Auteuil, Laval-des-Rapides et d\'autres secteurs.' },
        { q: 'Peignez-vous les maisons de nouvelles constructions à Laval?', a: 'Oui. La peinture de nouvelles constructions à Laval est un aspect régulier de notre travail.' },
      ],
      es: [
        { q: '¿Sirven a todo Laval?', a: 'Sí. Cubrimos todo Laval incluyendo Chomedey, Vimont, Auteuil, Laval-des-Rapides y otros sectores.' },
        { q: '¿Pintan casas de nueva construcción en Laval?', a: 'Sí. La pintura de nueva construcción en Laval es una parte regular de nuestro trabajo.' },
      ],
    },
  },
  {
    en: 'Longueuil', fr: 'Longueuil', es: 'Longueuil',
    slugEn: 'painters-longueuil',
    slugFr: 'peintre-longueuil',
    slugEs: 'pintores-longueuil',
    intro: {
      en: 'Longueuil and the South Shore have seen steady residential growth, bringing with them demand for quality painting services for both new builds and established homes. Peinture MTL extends its services to Longueuil with the same standard of work offered on the island of Montréal.',
      fr: 'Longueuil et la Rive-Sud ont connu une croissance résidentielle soutenue, entraînant une demande de services de peinture de qualité pour les nouvelles constructions et les maisons établies. Peinture MTL étend ses services à Longueuil avec le même standard de travail qu\'à Montréal.',
      es: 'Longueuil y la Rive-Sud han visto un crecimiento residencial constante, trayendo consigo demanda de servicios de pintura de calidad. Peinture MTL extiende sus servicios a Longueuil con el mismo estándar de trabajo que en la isla de Montreal.',
    },
    faqs: {
      en: [
        { q: 'Do you serve Longueuil and the South Shore?', a: 'Yes. We extend service to Longueuil and many South Shore communities. Contact us to confirm service availability for your specific area.' },
        { q: 'Is the pricing the same as Montréal for Longueuil projects?', a: 'Pricing is consistent. For locations that require significant travel, we may apply a modest travel supplement — always disclosed upfront in the estimate.' },
      ],
      fr: [
        { q: 'Desservez-vous Longueuil et la Rive-Sud?', a: 'Oui. Nous étendons notre service à Longueuil et à de nombreuses villes de la Rive-Sud. Contactez-nous pour confirmer la disponibilité pour votre secteur spécifique.' },
        { q: 'Le prix est-il le même qu\'à Montréal pour les projets à Longueuil?', a: 'La tarification est cohérente. Pour les emplacements nécessitant un déplacement important, un supplément de déplacement modeste peut s\'appliquer — toujours divulgué à l\'avance.' },
      ],
      es: [
        { q: '¿Sirven a Longueuil y la Rive-Sud?', a: 'Sí. Extendemos el servicio a Longueuil y muchas comunidades de la Rive-Sud. Contáctenos para confirmar la disponibilidad para su área específica.' },
        { q: '¿El precio es el mismo que en Montreal para proyectos en Longueuil?', a: 'Los precios son consistentes. Para ubicaciones que requieren viaje significativo, puede aplicarse un suplemento de viaje modesto, siempre divulgado por adelantado.' },
      ],
    },
  },
]

function buildLocalPages(): LocalAreaPage[] {
  const pages: LocalAreaPage[] = []

  for (const area of AREAS) {
    // English
    pages.push({
      lang: 'en',
      slug: area.slugEn,
      path: `/en/${area.slugEn}`,
      area: area.en,
      areaFr: area.fr,
      areaEs: area.es,
      title: `Painters in ${area.en}, Montréal | Peinture MTL`,
      metaDescription: `Professional painters in ${area.en}, Montréal. Interior and exterior painting for homes, condos, and businesses. Free estimates, reliable service.`,
      h1: `Painters in ${area.en}`,
      intro: area.intro.en,
      canonicalUrl: `${BASE}/en/${area.slugEn}`,
      hreflangAlternates: [
        { lang: 'en', url: `${BASE}/en/${area.slugEn}` },
        { lang: 'fr', url: `${BASE}/fr/${area.slugFr}` },
        { lang: 'es', url: `${BASE}/es/${area.slugEs}` },
      ],
      faqs: [
        ...area.faqs.en,
        { q: `Do you offer free estimates in ${area.en}?`, a: `Yes. We provide free on-site estimates for residential and commercial painting projects in ${area.en} and throughout Montréal.` },
      ],
      relatedPages: [
        { label: 'Interior Painting Montreal', path: '/en/interior-painting-montreal' },
        { label: 'Exterior Painting Montreal', path: '/en/exterior-painting-montreal' },
        { label: 'Residential Painting Montreal', path: '/en/residential-painting-montreal' },
        { label: 'Painting Estimate', path: '/en/painting-estimate-montreal' },
      ],
    })

    // French
    pages.push({
      lang: 'fr',
      slug: area.slugFr,
      path: `/fr/${area.slugFr}`,
      area: area.fr,
      areaFr: area.fr,
      areaEs: area.es,
      title: `Peintre à ${area.fr}, Montréal | Peinture MTL`,
      metaDescription: `Peintres professionnels à ${area.fr}, Montréal. Peinture intérieure et extérieure pour maisons, condos et commerces. Soumissions gratuites.`,
      h1: `Peintre à ${area.fr}`,
      intro: area.intro.fr,
      canonicalUrl: `${BASE}/fr/${area.slugFr}`,
      hreflangAlternates: [
        { lang: 'fr', url: `${BASE}/fr/${area.slugFr}` },
        { lang: 'en', url: `${BASE}/en/${area.slugEn}` },
        { lang: 'es', url: `${BASE}/es/${area.slugEs}` },
      ],
      faqs: [
        ...area.faqs.fr,
        { q: `Offrez-vous des soumissions gratuites à ${area.fr}?`, a: `Oui. Nous fournissons des soumissions gratuites sur place pour les projets de peinture résidentielle et commerciale à ${area.fr} et dans tout Montréal.` },
      ],
      relatedPages: [
        { label: 'Peinture intérieure Montréal', path: '/fr/peinture-interieure-montreal' },
        { label: 'Peinture extérieure Montréal', path: '/fr/peinture-exterieure-montreal' },
        { label: 'Peinture résidentielle Montréal', path: '/fr/peinture-residentielle-montreal' },
        { label: 'Soumission peinture', path: '/fr/soumission-peinture-montreal' },
      ],
    })

    // Spanish
    pages.push({
      lang: 'es',
      slug: area.slugEs,
      path: `/es/${area.slugEs}`,
      area: area.es,
      areaFr: area.fr,
      areaEs: area.es,
      title: `Pintores en ${area.es}, Montreal | Peinture MTL`,
      metaDescription: `Pintores profesionales en ${area.es}, Montreal. Pintura interior y exterior para casas, condos y negocios. Presupuestos gratuitos.`,
      h1: `Pintores en ${area.es}`,
      intro: area.intro.es,
      canonicalUrl: `${BASE}/es/${area.slugEs}`,
      hreflangAlternates: [
        { lang: 'es', url: `${BASE}/es/${area.slugEs}` },
        { lang: 'en', url: `${BASE}/en/${area.slugEn}` },
        { lang: 'fr', url: `${BASE}/fr/${area.slugFr}` },
      ],
      faqs: [
        ...area.faqs.es,
        { q: `¿Ofrecen presupuestos gratuitos en ${area.es}?`, a: `Sí. Proporcionamos presupuestos gratuitos en el sitio para proyectos de pintura residencial y comercial en ${area.es} y en todo Montreal.` },
      ],
      relatedPages: [
        { label: 'Pintura interior Montreal', path: '/es/pintura-interior-montreal' },
        { label: 'Pintura exterior Montreal', path: '/es/pintura-exterior-montreal' },
        { label: 'Pintura residencial Montreal', path: '/es/pintura-residencial-montreal' },
        { label: 'Cotización de pintura', path: '/es/cotizacion-pintura-montreal' },
      ],
    })
  }

  return pages
}

export const LOCAL_AREA_PAGES = buildLocalPages()
