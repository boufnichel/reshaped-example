"use client";

import { View, TextField, Button } from 'reshaped';

export default function RegisterPage() {
  return (
    <View gap={4} maxWidth={400} padding={6} marginX="auto">
      <h1>Register</h1>
      <TextField name="name" placeholder="Name" />
      <TextField name="email" placeholder="Email" />
      <TextField name="password" type="password" placeholder="Password" />
      <TextField name="confirmPassword" type="password" placeholder="Confirm Password" />
      <Button color="primary">Register</Button>
      <Button variant="outline" color="primary">Sign up with Google</Button>
      <Button variant="outline" color="primary">Sign up with Facebook</Button>
      <Button variant="outline" color="primary">Sign up with Twitter</Button>
      <Button variant="ghost" color="primary" href="/login">Already have an account? Login</Button>
    </View>
  );
}
