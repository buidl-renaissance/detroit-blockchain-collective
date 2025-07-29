import Head from "next/head";
import Image from "next/image";
import {
  HeroSection,
  Container,
  Section,
  Grid,
  FeatureCard,
  DisplayText,
  GradientText,
  SectionTitle,
  PrimaryButton,
  SecondaryButton,
  Flex,
  Spacer,
  FadeIn,
  SlideIn,
  Divider,
  GlowText,
} from "../styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Detroit Blockchain Collective</title>
        <meta name="description" content="Fostering innovation, collaboration, and education around blockchain technology throughout Michigan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Flex className="flex-center flex-column" style={{ minHeight: '80vh' }}>
            <FadeIn>
              <div style={{ 
                marginBottom: '2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <Image
                  src="/images/detroit-blockchain-collective-logo.png"
                  alt="Detroit Blockchain Collective Logo"
                  width={200}
                  height={200}
                />
              </div>
            </FadeIn>
            
            <FadeIn style={{ animationDelay: '0.1s' }}>
              <DisplayText>
                <GradientText>Detroit Blockchain Collective</GradientText>
              </DisplayText>
            </FadeIn>
            
            <SlideIn style={{ animationDelay: '0.3s' }}>
              <p style={{ 
                fontSize: '1.25rem', 
                lineHeight: 1.6, 
                maxWidth: '800px', 
                textAlign: 'center',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Founded in 2024, the Detroit Blockchain Collective exists to foster innovation, 
                collaboration, and education around blockchain technology throughout Michigan. 
                We are a grassroots community of builders, students, advocates, and entrepreneurs 
                working together to shape the future of decentralized technology in the Midwest.
              </p>
            </SlideIn>
            
            <Flex style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <PrimaryButton>Build with us</PrimaryButton>
              <SecondaryButton>Join our community</SecondaryButton>
            </Flex>
          </Flex>
        </Container>
      </HeroSection>

      {/* What We Offer Section */}
      <Section>
        <Container>
          <SectionTitle>What We Offer</SectionTitle>
          
          <Grid className="grid-3">
            <FadeIn>
              <FeatureCard>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
                <h3>Educational Events & Workshops</h3>
                <p>
                  Hands-on learning experiences designed to make blockchain accessible to all—whether you&apos;re a beginner or a builder.
                </p>
              </FeatureCard>
            </FadeIn>

            <FadeIn style={{ animationDelay: '0.1s' }}>
              <FeatureCard>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
                <h3>Networking & Collaboration</h3>
                <p>
                  Connect with a growing community of developers, founders, artists, investors, and policy advocates.
                </p>
              </FeatureCard>
            </FadeIn>

            <FadeIn style={{ animationDelay: '0.2s' }}>
              <FeatureCard>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
                <h3>Hackathons & Build Nights</h3>
                <p>
                  Join us for in-person and virtual events focused on prototyping ideas, solving problems, and showcasing talent.
                </p>
              </FeatureCard>
            </FadeIn>

            <FadeIn style={{ animationDelay: '0.3s' }}>
              <FeatureCard>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                <h3>Startup Mentorship & Advisor Connections</h3>
                <p>
                  Get plugged into Detroit&apos;s entrepreneurial ecosystem through mentorship, strategic advice, and pitch support.
                </p>
              </FeatureCard>
            </FadeIn>

            <FadeIn style={{ animationDelay: '0.4s' }}>
              <FeatureCard>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎓</div>
                <h3>Support for Student-Led Blockchain Clubs</h3>
                <p>
                  We provide resources, speakers, and collaboration opportunities to empower student leaders across Michigan.
                </p>
              </FeatureCard>
            </FadeIn>

            <FadeIn style={{ animationDelay: '0.5s' }}>
              <FeatureCard>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏛️</div>
                <h3>Digital Asset Policy Engagement & Advocacy</h3>
                <p>
                  We work with local and state officials to shape blockchain-forward policies that protect innovation and public interest.
                </p>
              </FeatureCard>
            </FadeIn>
          </Grid>
        </Container>
      </Section>

      {/* About Section */}
      <Section>
        <Container>
          <Flex className="flex-center flex-column">
            <SectionTitle>Community Over Hype</SectionTitle>
            <SlideIn>
              <div style={{
                background: 'rgba(30, 30, 30, 0.8)',
                borderRadius: '12px',
                padding: '2.5rem',
                border: '1px solid rgba(0, 179, 241, 0.2)',
                lineHeight: 1.8,
                fontSize: '1.1rem',
                maxWidth: '900px',
                textAlign: 'center'
              }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  We believe in <GlowText>blocks for the people</GlowText>—building open tools for an open future. 
                  Our community is grounded in Detroit&apos;s rich history of innovation and resilience, 
                  bringing that same energy to the blockchain space.
                </p>
                <p>
                  Whether you&apos;re a seasoned developer, a curious student, or someone passionate about 
                  the future of decentralized technology, there&apos;s a place for you in our collective.
                </p>
              </div>
            </SlideIn>
          </Flex>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section>
        <Container>
          <Flex className="flex-center flex-column">
            <SectionTitle>Ready to Build?</SectionTitle>
            <SlideIn>
              <p style={{ 
                textAlign: 'center', 
                fontSize: '1.25rem', 
                marginBottom: '2rem',
                maxWidth: '600px'
              }}>
                Join us in shaping the future of blockchain technology in the Midwest. 
                <GlowText> Open tools, open future.</GlowText>
              </p>
            </SlideIn>
            
            <Flex style={{ gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <PrimaryButton>Get Involved</PrimaryButton>
              <SecondaryButton>Learn More</SecondaryButton>
            </Flex>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
