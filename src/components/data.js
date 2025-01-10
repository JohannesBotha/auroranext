import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/aurora_gold.png";
import benefitTwoImg from "../../public/img/the-sun.jpg";

const benefitOne = {
  title: "Services",
  desc: "We specialize in..",
  image: benefitOneImg,
  bullets: [
    {
      title: "Completion and submission of provisional tax returns",
      desc: "Tax returns are easy for us.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Issuance of tax clearance certificates",
      desc: "We can prove your tax is paid.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "General accounting and bookkeeping",
      desc: "We can fix your books",
      icon: <CursorArrowRaysIcon />,
    },

  ],
};

const benefitTwo = {
  title: "Value added services include",
  desc: "Helping you achieve your goals",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Labour Brokarage",
      desc: "We can help with unexpected labour shortages.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Registration of companies.",
      desc: "When you need a new company we can help get your finances in order.",
      icon: <AdjustmentsHorizontalIcon />,
    },

  ],
};


export {benefitOne, benefitTwo};
