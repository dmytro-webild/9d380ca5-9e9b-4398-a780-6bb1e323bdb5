"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, Calendar, Check, Eye, Heart, Microscope, Shield, Smile, Users, Wind, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="large"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="flat"
      secondaryButtonStyle="layered"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Terident"
          navItems={[
            { name: "Úvod", id: "hero" },
            { name: "Služby", id: "services" },
            { name: "Pro pacienty", id: "patient-info" },
            { name: "Náš tým", id: "team" },
            { name: "Ceník", id: "pricing" },
            { name: "Kontakt", id: "contact" }
          ]}
          button={{ text: "Objednat se", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Zubní ordinace Terident"
          description="Jsme menší stomatologické centrum zaměřené na individuální přístup a stabilitu kolektivu. Neustálé zdokonalování technologií a vědomostí spolu s vysokou kvalitou ošetření je u nás samozřejmostí. Přijímáme nové pacienty."
          tag="Brno – Židenice"
          imageSrc="http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg?_wi=1"
          imageAlt="Moderní ordinace Terident"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={false}
          buttons={[
            { text: "Objednat se", href: "#contact" },
            { text: "Zavolat: +420 724 142 444", href: "tel:+420724142444" }
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTen
          title="Naše služby"
          description="Moderní technologie a odborný přístup pro nejlepší výsledky vašeho zdraví"
          tag="Služby"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          features={[
            {
              id: "1",              title: "Ošetření kořenových kanálků mikroskopem",              description: "Operační mikroskop umožňuje ošetřit i těžko viditelná místa a být šetrnější k tvrdým zubním tkáním. Přesnost a bezpečnost na nejvyšší úrovni.",              reverse: false,
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/young-female-dentist-treating-patients-teeth-with-dental-microscope-dentistry-concept_169016-67238.jpg?_wi=1",                imageAlt: "Operační mikroskop pro endodontické ošetření"
              },
              items: [
                { icon: Microscope, text: "Přesné vidění minimálního pole" },
                { icon: Shield, text: "Maximální ochrana zdravých tkání" },
                { icon: Check, text: "Vysoká úspěšnost ošetření" }
              ]
            },
            {
              id: "2",              title: "Bezbolestná dentální hygiena",              description: "Odstranění zubního kamene a pískování již nemusí být bolestivé díky ultrazvuku s jemnými vibracemi. Máme dva přístroje Master pro maximální komfort.",              reverse: true,
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/patient-receiving-dental-treatment_107420-65438.jpg?_wi=1",                imageAlt: "Dentální hygiena s ultrazvukem"
              },
              items: [
                { icon: Zap, text: "Jemné vibrace bez bolesti" },
                { icon: Wind, text: "Účinné čistění zubního kamene" },
                { icon: Smile, text: "Příjemný zážitek pacienta" }
              ]
            },
            {
              id: "3",              title: "Moderní 3D sken místo otisků",              description: "Moderní technologie 3D sken eliminuje potřebu nepříjemných otisků a zvyšuje komfort pro pacienta. Přesná digitální data pro lepší výsledky.",              reverse: false,
              media: {
                imageSrc: "http://img.b2bpic.net/free-photo/dentist-doctor-patient-looking-digital-teeh-x-ray-dental-office-person-pov-stomatology-wearing-protective-face-mask-gloves-pointing-teeth-radiography-stomatological-clinic_482257-13097.jpg",                imageAlt: "3D skenovací technologie"
              },
              items: [
                { icon: Eye, text: "Jasné digitální zobrazení" },
                { icon: Zap, text: "Rychlé a přesné snímání" },
                { icon: Users, text: "Zvýšený komfort pacienta" }
              ]
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Jsme zaměřeni na kvalitu péče a individuální přístup každému pacientovi"
          useInvertedBackground={true}
          metricsAnimation="slide-up"
          metrics={[
            { icon: Heart, label: "Spokojených pacientů", value: "500+" },
            { icon: Award, label: "Let zkušeností", value: "15+" },
            { icon: Zap, label: "Moderních technologií", value: "3" },
            { icon: Users, label: "Kvalifikovaných specialistů", value: "4" }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardFive
          title="Náš tým specialistů"
          description="Zkušení a přátelští odborníci připraveni péči o vaše zuby"
          tag="Tým"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          team={[
            {
              id: "1",              name: "MUDr. et MDDr. Novomestský",              role: "Vedoucí lékař, stomatolog",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-patient-man-looking-into-camera-waiting-doctors-start-stomatology-surgery-sitting-dental-chair_482257-4877.jpg"
            },
            {
              id: "2",              name: "MDDr. Kudlíková",              role: "Stomatolog",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-nurse-with-stethoscope_23-2148740054.jpg?_wi=1"
            },
            {
              id: "3",              name: "MDDr. Pšejová",              role: "Stomatolog",              imageSrc: "http://img.b2bpic.net/free-photo/smiley-nurse-with-stethoscope_23-2148740054.jpg?_wi=2"
            },
            {
              id: "4",              name: "Dentální hygienistka",              role: "Dentální hygiena a prevence",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-young-dentist-dentist-s-clinic_329181-20753.jpg"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Ceník služeb"
          description="Transparentní ceny za kvalitní péči. Vždy vás poradíme o možnostech úhrady."
          tag="Ceny"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          plans={[
            {
              id: "consultation",              title: "Konzultační vyšetření",              price: "1 800",              period: "Kč",              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg?_wi=2",              features: ["Komplexní zhodnocení stavu"],
              button: { text: "Objednat si termín", href: "#contact" }
            },
            {
              id: "sanace",              title: "Sanace (léčení zubů)",              price: "3 000 - 5 000",              period: "Kč",              imageSrc: "http://img.b2bpic.net/free-photo/young-female-dentist-treating-patients-teeth-with-dental-microscope-dentistry-concept_169016-67238.jpg?_wi=2",              features: ["Dle rozsahu zákroku"],
              button: { text: "Objednat si termín", href: "#contact" }
            },
            {
              id: "extraction",              title: "Extrakce (vytržení zubu)",              price: "1 000 - 2 000",              period: "Kč",              imageSrc: "http://img.b2bpic.net/free-photo/patient-receiving-dental-treatment_107420-65438.jpg?_wi=2",              features: ["Dle složitosti postupu"],
              button: { text: "Objednat si termín", href: "#contact" }
            }
          ]}
        />
      </div>

      <div id="patient-info" data-section="patient-info">
        <BlogCardTwo
          title="Pro pacienty"
          description="Praktické informace pro vaši přípravu a pohodlí"
          tag="Info"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          blogs={[
            {
              id: "parking",              category: ["Informace"],
              title: "Parkování",              excerpt: "Vyhrazená parkovací stání ve dvoře hned vedle budovy kliniky. Zvoňte na zvonek a budete vpuštěni dovnitř.",              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-with-coffee-talking-phone-parking-lot_169016-37546.jpg",              authorName: "Terident",              authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg",              date: "Vždy dostupné"
            },
            {
              id: "prevention",              category: ["Prevence"],
              title: "Preventivní péče",              excerpt: "Doporučujeme preventivní kontroly 2× ročně. Pro děti první prohlídka po prvním zubě, přibližně v 1 roce věku.",              imageSrc: "http://img.b2bpic.net/free-photo/two-cutie-little-baby-girls-dentist-chair-children-dental_627829-9361.jpg?_wi=1",              authorName: "Terident",              authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg",              date: "Celoživotně"
            },
            {
              id: "children-care",              category: ["Péče o děti"],
              title: "Ošetřování dětských pacientů",              excerpt: "Konzultace a ošetření dětí s individuálním přístupem. Cílem je zvládnout zákrok bez celkové narkózy klidným vedením a vysvětlením kroků.",              imageSrc: "http://img.b2bpic.net/free-photo/two-cutie-little-baby-girls-dentist-chair-children-dental_627829-9361.jpg?_wi=2",              authorName: "Terident",              authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-spacious-office-dentist_8353-9976.jpg",              date: "Pro děti"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="Zkušenosti našich pacientů"
          description="Čtěte, co říkají naši spokojení pacienti o péči v ordinaci Terident"
          tag="Recenze"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Jana Dvořáková",              role: "Pacientka",              company: "Brno",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg?_wi=1"
            },
            {
              id: "2",              name: "Petr Novotný",              role: "Pacient",              company: "Židenice",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-african-american-doctor-home-visit_637285-11276.jpg"
            },
            {
              id: "3",              name: "Marie Svobodová",              role: "Pacientka",              company: "Brno",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg?_wi=2"
            },
            {
              id: "4",              name: "Josef Horák",              role: "Pacient",              company: "Brno",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/family-doctor-doctor-s-office_23-2148168431.jpg"
            },
            {
              id: "5",              name: "Lucie Křížová",              role: "Pacientka",              company: "Židenice",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg?_wi=3"
            },
            {
              id: "6",              name: "David Kučera",              role: "Pacient",              company: "Brno",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-african-american-doctor-nursing-home_637285-11403.jpg?_wi=4"
            }
          ]}
          kpiItems={[
            { value: "500+", label: "Spokojených pacientů" },
            { value: "98%", label: "Doporučuje nás dál" },
            { value: "15+", label: "Let zkušeností" }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Často kladené otázky"
          sideDescription="Odpovědi na vaše nejčastější otázky o našich službách a ordinaci"
          useInvertedBackground={true}
          textPosition="left"
          animationType="smooth"
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "Jak se objednat k zubnímu lékaři?",              content: "Objednat se můžete telefonicky na čísle +420 724 142 444 nebo prostřednictvím kontaktního formuláře na tomto webu. Součástí objednávky můžete uvést preferovaný termín. Potvrzujeme objednávku SMS zprávou."
            },
            {
              id: "2",              title: "Jaké jsou ordinační hodiny?",              content: "Ordinační hodiny najdete v sekci kontaktu. Pracujeme pondělí až pátek s přestávkou na oběd. V mimořádných situacích je možné domluvit si mimořádný termín."
            },
            {
              id: "3",              title: "Máte parkování?",              content: "Ano, máme vyhrazená parkovací stání ve dvoře hned vedle budovy kliniky. Při příjezdu si zazvučte na zvonek a budete vpuštěni dovnitř."
            },
            {
              id: "4",              title: "Ošetřujete děti?",              content: "Ano, ošetřujeme děti s individuálním přístupem. Cílem je zvládnout zákrok bez celkové narkózy. Doporučujeme první prohlídku po prvním zubě, přibližně v 1 roce věku."
            },
            {
              id: "5",              title: "Jaké jsou vaše možnosti úhrady?",              content: "Péči hradíme za pacienty jejich pojišťovny. Rozdíly v terapeutických přístupech a výběru materiálů vysvětlíme vždy na kontrole. Akceptujeme platby kartou."
            },
            {
              id: "6",              title: "Je ordinace moderně vybavená?",              content: "Ano, máme operační mikroskop, ultrazvuk pro bezbolestnou hygienu a moderní 3D skener. Neustálé zdokonalování vybavení a vědomostí je u nás samozřejmostí."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Objednejte si termín"
          tagIcon={Calendar}
          title="Připraveni převzít vaši péči"
          description="Kontaktujte nás telefonicky nebo vyplňte formulář níže. Rádi vám naplánujeme termín, který vám vyhovuje."
          buttons={[
            { text: "Objednat se", href: "#" },
            { text: "Zavolat", href: "tel:+420724142444" }
          ]}
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Terident"
          leftLink={{ text: "Ochrana osobních údajů", href: "#" }}
          rightLink={{ text: "Kontakt", href: "#contact" }}
        />
      </div>
    </ThemeProvider>
  );
}