import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NiceBoatPic from "../images/NiceBoatPic.jpg";
import "@fontsource/roboto"; // Defaults to weight 400.
import "../App.css";
import { Link } from "react-router-dom";
import { Container, TextContainer, Header } from "../ComponentStyles";
import { Root } from "../styles";
import axios from "axios";

const ImgContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  padding-top: 4em;

  @media (max-width: 768px) { 
    padding-top: 1em;
`;

const TextAndNewsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextDiv = styled.div`
  padding: 10px;
  width: 60vw;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NewsDiv = styled.div`
  width: 40vw;
  max-height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    width: 100vw;
    max-height: 60vh;
  }

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const NewsTitleDiv = styled.div`
  padding: 10px;
  width: auto;
  font-size: 1.3em;
  text-align: center;
  overflow: wrap;
  font-weight: bold;
`;

const NewsContentDiv = styled.div`
  padding: 20px;
  width: auto;
  text-align: left;
  font-size: 0.9em;
  overflow: wrap;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const NewsImageDiv = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NewsImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
  box-sizing: border-box;
  padding: 0;
  border-radius: 5px;
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: #2c5f2d;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 1.5em;
  padding: 15px 0;
  font-weight: bold;
`;

const NewsItemWrapper = styled.div`
  width: 100%;
  padding: 15px;
  border-bottom: 2px solid #ddd;
  box-sizing: border-box;
  background-color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NewsDate = styled.p`
  padding-left: 10px;
  box-sizing: border-box;
  color: #666;
  font-size: 0.9em;
  font-style: italic;
`;

const ClickToViewMore = styled.div`
  text-align: center;
  padding: 10px;
  color: #2c5f2d;
  font-weight: bold;
  font-size: 1em;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1a3d1f;
  }
`;

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to convert file system path to web URL path
  function toWebPath(internalPath) {
    if (!internalPath) return "";
    return internalPath.replace("/var/www", "");
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://adejord.co.uk/getLatestNews") // Changed to fetch ALL news
      .then((response) => {
        console.log("API Response:", response.data);
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news items:", error.message);
        if (error.response) {
          console.error("Error status", error.response.status);
          console.error("Error data", error.response.data);
        } else if (error.request) {
          console.error("Error request", error.request);
        } else {
          console.error("Error", error.message);
        }
        console.error(error.config);
        setLoading(false);
      });
  }, []);

  return (
    <Root>
      <Container>
        <ImgContainer>
          <img
            src={NiceBoatPic}
            style={{
              maxWidth: "80%",
              height: "auto",
              display: "block",
              borderRadius: "5px",
            }}
            alt="Nice Boat Pic"
          />
        </ImgContainer>

        <h4
          style={{
            padding: "15px",
            textAlign: "center",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          Providing day trips for community and family groups
        </h4>
        <hr style={{ width: "90vw" }} />
        <TextAndNewsDiv>
          <TextDiv>
            <TextContainer>
              We are a small, friendly charity that has provided canal trips for
              the people of the West Midlands and beyond for over 50 years. We
              are run entirely by volunteers whose only aim is to give you a
              very enjoyable and memorable day out.
            </TextContainer>
            <TextContainer>
              Our purpose is to provide day trips for community and family
              groups whose members may be elderly, disabled, have special needs
              or health issues..
            </TextContainer>
            <TextContainer>
              We believe a day out in the peace &amp; quiet of the countryside
              at a very relaxing pace &amp; in good company is beneficial to
              everybody. We want our passengers &amp; volunteers to enjoy the
              historic and beautiful canals of the West Midlands and go home
              feeling better for the experience.
            </TextContainer>
            <TextContainer>
              Starting from Hatherton Marina, Queens Road, Calf Heath near
              Cannock (WV10 7DT), we offer fully accessible day trips on
              narrowboat 'Enterprise' travelling along the Staffs &amp; Worcs
              canal to either Autherley Junction, Coven or Penkridge. For those who are
              able-bodied, energetic and perhaps a bit more adventurous, a
              longer trip to Penkridge can be provided for passengers who wish to participate. We call this the
              Have-a-go trip in which you can learn how to steer and operate 12
              locks..
            </TextContainer>
            <TextContainer>
              Equipped with a lift and accessible toilet, we can take up to 12
              passengers (including a minimum of 2 leaders). These can include 2 wheelchair
              users as well as passengers with walkers &amp; frames. With full
              use of our kitchen facilities, feel free to make your own tea,
              coffee, hot chocolate (coffee, tea, hot chocolate, sugar, milk,
              squash are provided). You can bring your own packed lunches, order
              fish &amp; chips or have a drink and/or meal at the Anchor Inn,
              Coven.
            </TextContainer>
          </TextDiv>
          <hr />

          <NewsDiv>
            <StickyHeader>Latest News</StickyHeader>
            {loading ? (
              <NewsContentDiv>
                <p>Loading news...</p>
              </NewsContentDiv>
            ) : news.length === 0 ? (
              <NewsContentDiv>
                <h2>Server Issue</h2>
                <p>
                  There is currently an issue with the server. This is
                  outside of our control.
                </p>
                <p>Please check again later</p>
              </NewsContentDiv>
            ) : (
              <>
                {news.map((item) => (
                  <NewsItemWrapper key={item.id}>
                    <NewsTitleDiv>{item.title}</NewsTitleDiv>
                    <NewsContentDiv>{item.content}</NewsContentDiv>
                    {item.image_path && (
                      <NewsImageDiv>
                        <NewsImage
                          src={`https://adejord.co.uk${toWebPath(
                            item.image_path
                          )}`}
                          alt={item.title}
                        />
                      </NewsImageDiv>
                    )}
                    <NewsDate>
                      {new Date(item.date).toLocaleDateString("en-GB", {
                        timeZone: "Europe/London",
                      })}
                    </NewsDate>
                  </NewsItemWrapper>
                ))}
                <Link
                  to="/News"
                  style={{
                    width: "100%",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <ClickToViewMore>
                    Click here to view all news on dedicated page →
                  </ClickToViewMore>
                </Link>
              </>
            )}
          </NewsDiv>
        </TextAndNewsDiv>

        <Header>With Many Thanks to</Header>
        <ImgContainer>
          <img
            src="https://www.truman-enterprise.org.uk/photos/2019lotlog.jpg"
            alt="National Lottery Community Fund"
            style={{ width: "30vw", padding: "20px", height: "auto" }}
          />
          <img
            src="https://www.truman-enterprise.org.uk/graphics/co-op_logo.gif"
            alt="The Midlands Co-operative"
            style={{
              width: "30vw",
              marginTop: "30px",
              padding: "20px",
              height: "7vw",
            }}
          />
        </ImgContainer>
        <ImgContainer>
          <img
            src="https://www.truman-enterprise.org.uk/graphics/crtlogo.jpg"
            alt="Canal & River Trust"
            style={{ width: "30vw", padding: "20px", height: "auto" }}
          />
          <img
            src="https://www.truman-enterprise.org.uk/graphics/HOE%20Logo.jpg"
            alt="Heart of England"
            style={{ width: "30vw", padding: "20px", height: "auto" }}
          />
        </ImgContainer>
        <Header>For your support.</Header>
      </Container>
    </Root>
  );
};

export default Home;