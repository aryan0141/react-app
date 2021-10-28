import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <div>
      <Typography variant="h3">Testimonials</Typography>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TestimonialCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
