export function GET(request: Request) {
  console.log("Hello world from API Route");
  console.log("Secret from Client side ", process.env.SECRET_KEY);
  console.log("Public from Client side ", process.env.EXPO_PUBLIC_SHARED_KEY);
  return Response.json({ Hello: "World" });
}
