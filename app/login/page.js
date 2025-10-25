"use client";

import { View, TextField, Button } from 'reshaped';

export default function LoginPage() {
  return (
    <View gap={4} maxWidth={400} padding={6} marginX="auto">
      <h1>Login</h1>
      <TextField name="email" placeholder="Email" />
      <TextField name="password" type="password" placeholder="Password" />
      <Button color="primary">Login</Button>
      <Button variant="outline" color="primary">Continue with Google</Button>
      <Button variant="outline" color="primary">Continue with Facebook</Button>
      <Button variant="outline" color="primary">Continue with Twitter</Button>
      <Button variant="ghost" color="primary" href="/register">Don't have an account? Register</Button>
    </View>
  );
}
