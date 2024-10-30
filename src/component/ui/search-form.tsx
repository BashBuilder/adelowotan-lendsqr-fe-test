"use client";

import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

const searchSchema = z.object({
  searchTerm: z.string().min(1, "Search term is required"),
});

type SearchFormInputs = z.infer<typeof searchSchema>;

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchFormInputs> = (data) => {
    toast.success("This is your message! " + data.searchTerm);
    reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Search for anything"
        {...register("searchTerm")}
      />
      {errors.searchTerm && (
        <span className="error">{errors.searchTerm.message}</span>
      )}
      <button>
        <Image
          src="/assets/svg/icons/search.svg"
          alt="search icon"
          width={16}
          height={16}
          quality={100}
        />
      </button>
    </form>
  );
};

export default SearchForm;
