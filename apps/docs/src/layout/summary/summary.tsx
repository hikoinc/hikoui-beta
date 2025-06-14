"use client";

import SummaryNavigation from "./summary-navigation";

const Summary = () => (
  <div className="sticky top-24 hidden w-48 space-y-8 self-start overflow-y-auto lg:block">
    <SummaryNavigation />
  </div>
);

export default Summary;
