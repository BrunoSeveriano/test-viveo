"use client";
import React from "react";
import Card from "@mui/material/Card";
import { Button, CardContent } from "@mui/material";
import Image from "next/image";
import Input from "./inputs/Input";
import Link from "next/link";

const Login = () => {
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

          <div className="w-96">
            <Input name="email" label="Email" />
            <Input type="password" name="password" label="Password" />
            <Link href="/dashboard">
              <Button
                fullWidth
                sx={{ "&.MuiButton-root": { backgroundColor: "#0b4c51" } }}
                variant="contained"
              >
                Login
              </Button>
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link href="/register">
              <Button
                variant="text"
                sx={{ "&.MuiButton-root": { color: "#0b4c51" } }}
                fullWidth
              >
                Registrar
              </Button>
            </Link>
            <Link href="/forgot-password">
              <Button
                variant="text"
                sx={{ "&.MuiButton-root": { color: "#0b4c51" } }}
                fullWidth
              >
                Esqueceu a senha ?
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
