import { Box, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] place-items-center bg-slate-100 px-5 py-12 text-slate-900 sm:px-8">
      <section className="w-full max-w-2xl rounded-3xl bg-white p-7 shadow-xl shadow-slate-300/60 sm:p-10">
        <h1 className="text-4xl font-bold tracking-tight">Venue Booking</h1>
        <Box component="form" className="mt-8 space-y-8">
          <DateReserve />
          <div className="flex justify-end pt-2">
            <Button name="Book Venue" type="submit" variant="contained" sx={{ borderRadius: 999, px: 3, py: 1.25, bgcolor: "#0f172a" }}>
              Book Venue
            </Button>
          </div>
        </Box>
      </section>
    </main>
  );
}
