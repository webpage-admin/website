import React from "react";
import styled from "styled-components";
import boats from "../images/boats.jpg";
import "@fontsource/roboto";
import { Container, TextContainer, Header } from "../ComponentStyles";

const ImgContainer = styled.div`
  padding-top: 10px;
  width: 90vw;
  height: auto;
`;

const SupportSection = styled.div`
  padding: 20px;
  margin: 20px 0;
  width: 90vw;
`;

const SupportTitle = styled.h3`
  color: #2c5f2d;
  margin-bottom: 10px;
  font-size: 1.3em;
`;

const SupportUs = () => {
  return (
    <Container>
      <Header>Support Our Trust</Header>
      {/* <ImgContainer>
        <img
          src={boats}
          style={{ width: "100%", height: "100%" }}
          alt="canal boat with disabled access lift"
        />
      </ImgContainer> */}
      <p style={{ padding: "15px", textAlign: "center", fontStyle: "italic" }}>
        Making canal trips accessible for everyone in our community
      </p>
      <hr style={{ width: "90vw" }} />

      <TextContainer>
        Our trust is dedicated to providing memorable canal boat experiences for
        elderly and disabled members of our community. With our specially
        equipped boat featuring a disabled lift, we break down barriers and
        create opportunities for everyone to enjoy the tranquility and beauty of
        our local waterways.
      </TextContainer>

      <TextContainer>
        Every trip we offer brings joy, connection, and a sense of freedom to
        those who might otherwise miss out on these experiences. But we can only
        continue this vital community work with your support.
      </TextContainer>

      <SupportSection>
        <SupportTitle>🚤 Volunteer as a Skipper</SupportTitle>
        <TextContainer>
          Love being on the water? We need experienced or trainable volunteers to
          help steer our boats during trips. Full training provided by our NCBA
          qualified skippers. You'll gain valuable skills while making a real
          difference to people's lives.
        </TextContainer>
      </SupportSection>

      <SupportSection>
        <SupportTitle>⚓ Join Our Boat Crew</SupportTitle>
        <TextContainer>
          Our crew members are essential to every successful trip. Help with lock
          operations, assist passengers, provide refreshments, and ensure everyone
          has a safe and enjoyable experience. No previous experience necessary -
          just enthusiasm and a caring nature.
        </TextContainer>
      </SupportSection>

      <SupportSection>
        <SupportTitle>📋 Administrative Support</SupportTitle>
        <TextContainer>
          Behind every boat trip is careful planning and coordination. We need
          volunteers to help with booking systems, maintaining passenger records,
          scheduling trips, coordinating volunteers, and general office
          administration. Work from home or join us at our base.
        </TextContainer>
      </SupportSection>

      <SupportSection>
        <SupportTitle>📢 Marketing & Communications</SupportTitle>
        <TextContainer>
          Help us spread the word about our work! We're looking for volunteers to
          manage social media, create promotional materials, write newsletters,
          take photos during trips, maintain our website, and help with community
          outreach. Your skills could help us reach more people who would benefit
          from our services.
        </TextContainer>
      </SupportSection>

      <SupportSection>
        <SupportTitle>💰 Fundraising & Events</SupportTitle>
        <TextContainer>
          Support our financial sustainability by helping organize fundraising
          events, writing grant applications, managing donor relationships, or
          coordinating charity activities. Every pound raised keeps our boats
          running and our community thriving.
        </TextContainer>
      </SupportSection>

      <SupportSection>
        <SupportTitle>🔧 Maintenance & Technical Support</SupportTitle>
        <TextContainer>
          Do you have practical skills? We need help with boat maintenance,
          equipment checks, ensuring our disabled lift operates safely, general
          repairs, and keeping our marina facilities in good condition. Your
          expertise keeps us safe and operational.
        </TextContainer>
      </SupportSection>

      <SupportSection>
        <SupportTitle>🤝 Trustee & Governance</SupportTitle>
        <TextContainer>
          Join our board of trustees and help shape the future of our
          organization. We welcome people with skills in finance, legal matters,
          charity governance, or strategic planning. Usually requires attendance
          at quarterly meetings.
        </TextContainer>
      </SupportSection>

      <TextContainer>
        <strong>Whatever your skills, interests, or available time, there's a way
        you can help.</strong> Whether you can spare a few hours a month or want to
        make a regular commitment, every contribution matters. You'll join a
        friendly team of dedicated volunteers who share a passion for making our
        waterways accessible to all.
      </TextContainer>

      <TextContainer>
        <strong>Why Volunteer With Us?</strong> Meet like-minded people, learn new
        skills, gain boating experience, make a genuine difference to your
        community, enjoy time on the beautiful canals, and receive full training
        and support in your role.
      </TextContainer>

      <hr style={{ width: "90vw", margin: "30px 0" }} />

      <TextContainer>
        <strong>Ready to get involved?</strong> Contact us today to discuss how you
        can support our trust. No commitment necessary - just get in touch for an
        informal chat about the opportunities available.
      </TextContainer>

      <TextContainer>
        <div>Jenny - 07895 053090</div>
        <div>Mariel - enterprise@truman-enterprise.org.uk</div>
      </TextContainer>

      <TextContainer>
        You can also make a financial donation to support our work. Every
        contribution helps us maintain our boats, cover running costs, and continue
        providing free trips to those who need them most.
      </TextContainer>

      <TextContainer>
        <em>
          Together, we can ensure that everyone in our community has the
          opportunity to experience the joy and tranquility of our canal heritage.
        </em>
      </TextContainer>
    </Container>
  );
};

export default SupportUs;