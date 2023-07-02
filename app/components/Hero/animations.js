import { gsap } from "gsap";

export const animateTitle = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 2,
    },
  });

  tl.to("[data-hero-line]", {
    scaleX: 1,
  })
    .fromTo(
      "[data-title-first]",
      {
        x: 100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      "<15%"
    )
    .fromTo(
      "[data-title-last]",
      {
        x: -100,
        autoAlpha: 0,
      },
      {
        x: 0,
        autoAlpha: 1,
      },
      "<"
    );

  return tl;
};

export const animateImage = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.out",
      duration: 1.5,
    },
  });

  tl.to("[data-image-overlay]", {
    scaleY: 1,
  })
    .from(
      "[data-image]",
      {
        yPercent: 100,
      },
      "<"
    )
    .to("[data-image-overlay]", {
      scaleY: 0,
      transformOrigin: "top center",
    })
    .from(
      "[data-image]",
      {
        duration: 2,
        scale: 1.3,
      },
      "<"
    );

  return tl;
};

export const revealMenu = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "[data-menu-item]",
    {
      autoAlpha: 0,
      y: 32,
    },
    {
      autoAlpha: 1,
      y: 0,
      stagger: 0.2,
      ease: "expo.out",
      duration: 2,
    }
  );

  return tl;
};
