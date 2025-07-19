"use client";

import { useState } from "react";
import TabButton from "./tab-button";
import AboutTab from "./tabs/about-tab";
import PostsTab from "./tabs/posts-tab";
import ContactTab from "./tabs/contact-tab";

type Tab = "about" | "posts" | "contact";

const Demo = () => {
  const [tab, setTab] = useState<Tab>("about");

  const selectTab = (tab: Tab) => {
    setTab(tab);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6 flex flex-wrap gap-2 border-b border-gray-200 pb-4">
        <TabButton
          onClick={() => selectTab("about")}
          variant={tab === "about" ? "default" : "outline"}
          className="min-w-[100px]"
        >
          About
        </TabButton>
        <TabButton
          onClick={() => selectTab("posts")}
          variant={tab === "posts" ? "default" : "outline"}
          className="min-w-[100px]"
        >
          Posts
        </TabButton>
        <TabButton
          onClick={() => selectTab("contact")}
          variant={tab === "contact" ? "default" : "outline"}
          className="min-w-[100px]"
        >
          Contact
        </TabButton>
      </div>

      <div className="min-h-[400px]">
        {tab === "about" && <AboutTab />}
        {tab === "posts" && <PostsTab />}
        {tab === "contact" && <ContactTab />}
      </div>
    </div>
  );
};

export default Demo;
