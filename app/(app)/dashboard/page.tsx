"use client";
import { api } from "@/utils/api";
import { Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const getUserData = async () => {
    const response = await api.get("/?results=20");
    console.log(response.data);
    setUsers(response.data.results);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="w-full pr-20 mt-2 ">
        <Link href="/">
          <Button
            variant="text"
            sx={{
              "&.MuiButton-root": {
                backgroundColor: "#ffffff",
                color: "#0b4c51",
              },
            }}
            fullWidth
          >
            Voltar
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap">
        {users
          ? users?.map((user: any) => (
              <Card key={user?.id} className="h-64 w-2/12 mr-10 mt-4">
                <CardContent className="flex flex-col items-center">
                  <div>
                    <Image
                      className="rounded-full"
                      src={user?.picture?.large}
                      alt={user?.name?.first}
                      width={130}
                      height={130}
                    />
                  </div>
                  <span className="text-lg mt-3">
                    {user?.name?.first} {user?.name?.last}
                  </span>
                  <span className="text-md mt-2">{user?.phone}</span>
                  <span className="text-md mt-1">{user?.email}</span>
                </CardContent>
              </Card>
            ))
          : null}
      </div>
    </>
  );
};

export default Dashboard;
