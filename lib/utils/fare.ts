interface Location {
  lat: number;
  lng: number;
}

export const calculateDistance = (start: Location, end: Location): number => {
  // Haversine formula for calculating distance between two points
  const R = 6371; // Earth's radius in km
  const dLat = toRad(end.lat - start.lat);
  const dLon = toRad(end.lng - start.lng);
  const lat1 = toRad(start.lat);
  const lat2 = toRad(end.lat);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

const toRad = (value: number): number => {
  return value * Math.PI / 180;
};

export const calculateFare = (distance: number): number => {
  const baseRate = 5;
  const perKmRate = 2.5;
  return baseRate + (distance * perKmRate);
};

export const estimateDuration = (distance: number): number => {
  const averageSpeed = 30; // km/h
  return Math.round((distance / averageSpeed) * 60); // Convert to minutes
};