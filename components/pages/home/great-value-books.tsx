"use client";

import { BookCard, BookCardProps } from "@/components/cards/book-card";
import { Container } from "../../container";
import styles from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Box, Button, IconButton } from "@radix-ui/themes";
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
  CarouselSlideList,
} from "@/components/carousel";
import { HiddenScroll } from "@/components/hidden-scroll";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { useHomePageMock } from "@/hooks/mocks";
import { useIsRtl } from "@/hooks/rtl";

const books: BookCardProps[] = Array(20).fill({
  title: "Milk and honey",
  addable: true,
  author: "Rupi Kaur",
  price: 6,
  image:
    "https://cdn.discordapp.com/attachments/1088544131212652605/1156638529674301440/Bp9p5PJ.png",
});

export function GreatValueBooks() {
  const { productsSection1 } = useHomePageMock();
  const isRtl = useIsRtl();

  const RightButton = isRtl ? CarouselPrevious : CarouselNext;
  const LeftButton = isRtl ? CarouselNext : CarouselPrevious;

  return (
    <section className={styles.section}>
      <h2>{productsSection1.title}</h2>
      <p>{productsSection1.description}</p>
      <Box
        position="relative"
        style={{
          maxWidth: "100%",
        }}
      >
        <Carousel>
          <Box asChild ml={{ initial: "5", xs: "6", sm: "7", md: "9" }} mt="5">
            <HiddenScroll asChild>
              <CarouselSlideList
                style={{
                  display: "grid",
                  gridAutoFlow: "column",
                  gridAutoColumns: "min-content",
                  paddingTop: "var(--space-1)",
                  paddingBottom: "var(--space-1)",
                  WebkitOverflowScrolling: "touch",
                  position: "relative",
                  // Remove the actual margin
                  // @ts-ignore
                  "--margin-left-override": 0,
                }}
              >
                {books.map((book, i) => (
                  <Box pr="9" key={i} py="5">
                    <CarouselSlide>
                      <BookCard {...book} />
                    </CarouselSlide>
                  </Box>
                ))}
              </CarouselSlideList>
            </HiddenScroll>
          </Box>

          <Box
            style={{
              position: "absolute",
              top: "calc(50% - var(--space-9))",
              left: "15px",
              zIndex: 1,
            }}
          >
            <LeftButton
              aria-label={isRtl ? "Show next demo" : "Show previous demo"}
              tabIndex={-1}
              size="4"
              as={IconButton}
              className="disable-hide"
            >
              <RxArrowLeft />
            </LeftButton>
          </Box>
          <Box
            style={{
              position: "absolute",
              top: "calc(50% - var(--space-9))",
              right: "15px",
              zIndex: 1,
            }}
          >
            <RightButton
              aria-label={isRtl ? "Show previous demo" : "Show next demo"}
              tabIndex={-1}
              size="4"
              as={IconButton}
              className="disable-hide"
            >
              <RxArrowRight />
            </RightButton>
          </Box>
        </Carousel>
      </Box>
    </section>
  );
}
