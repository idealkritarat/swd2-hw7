import { Box, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-6">
      <section className="mx-auto w-full max-w-2xl rounded-xl bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold">Venue Booking</h1>
        <Box component="form" className="mt-8 space-y-8">
          <DateReserve />
          <div className="flex justify-end">
            <Button name="Book Venue" type="submit" variant="contained">
              Book Venue
            </Button>
          </div>
        </Box>
      </section>
    </main>
  );
}
