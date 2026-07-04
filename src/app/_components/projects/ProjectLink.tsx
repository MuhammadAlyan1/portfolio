"use client";
import React from "react";
import toast from "react-hot-toast";
import { FiExternalLink } from "react-icons/fi";

const styles = {
  container:
    "group flex w-fit cursor-pointer items-center gap-2 rounded-md border border-accent bg-primaryBackground px-3 py-1 uppercase text-accent",
  icon: "relative transition-all duration-200 ease-in-out group-hover:translate-x-[2px] group-hover:translate-y-[-2px]",
};

const ProjectLink: React.FC<{
  label: string;
  href?: string;
  missingLinkMessage?: string;
}> = ({ label, href, missingLinkMessage = "This repository is private" }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.container}
      >
        {label}
        <FiExternalLink className={styles.icon} />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles.container}
      onClick={() => toast.error(missingLinkMessage)}
    >
      {label}
      <FiExternalLink className={styles.icon} />
    </button>
  );
};

export default ProjectLink;
