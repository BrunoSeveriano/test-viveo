"use client";
import React from "react";
import Card from "@mui/material/Card";
import { Button, CardContent } from "@mui/material";
import Image from "next/image";
import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ForgotPassword = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card
        className="flex flex-col items-center justify-center"
        sx={{ minWidth: 475 }}
      >
        <CardContent>
          <Image
            className="mx-auto"
            alt="logo"
            src="/logo-viveo.png"
            width={210}
            height={100}
          />

          <div className="flex flex-col items-center">
            <p className="text-[#0b4c51]">
              Insira o seu email e receba um link de recuperação.
            </p>
          </div>

          <div className="w-96">
            <Input name="email" label="Email" />
            <Button
              fullWidth
              sx={{ "&.MuiButton-root": { backgroundColor: "#0b4c51" } }}
              variant="contained"
            >
              Enviar
            </Button>
          </div>

          <div className="mt-5 text-center">
            <Link href="/">
              <Button
                variant="text"
                sx={{ "&.MuiButton-root": { color: "#0b4c51" } }}
                fullWidth
                startIcon={<ArrowBackIcon />}
              >
                Voltar para Login
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPassword;
