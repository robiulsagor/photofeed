"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

export default function Modal({ children }) {
  const modalRef = useRef();
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current.open) {
      modalRef.current.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      onClose={onHide}
      ref={modalRef}
      className="shadow-xl shadow-slate-500 rounded-lg"
    >
      <span className="bg-red-500">
        <Image
          src="/xmark.svg"
          width={30}
          height={20}
          alt="close btn"
          className="absolute right-5 top-3 cursor-pointer"
          onClick={onHide}
        />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-content")
  );
}
