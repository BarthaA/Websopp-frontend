const API_BASE_URL = 'http://localhost:3000';

interface Car {
    id: number;
    brand: string;
    model: string;
    fuel: string;
    power: number;
    price: number;
}

export const getCars = async (page: number, limit: number) => {
  const response = await fetch(`${API_BASE_URL}/cars?page=${page}&limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch cars');
  return response.json();
};

export const getCarById = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/cars/${id}`);
  if (!response.ok) throw new Error('Failed to fetch car');
  return response.json();
};

export const createCar = async (car: Car): Promise<Car> => {
    const response = await fetch(`${API_BASE_URL}/cars`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    if (!response.ok) throw new Error('Failed to create car');
    return response.json();
};

export const updateCar = async (id: number, car: Car) => {
  const response = await fetch(`${API_BASE_URL}/cars/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car),
  });
  if (!response.ok) throw new Error('Failed to update car');
  return response.json();
};

export const deleteCar = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/cars/${id}`, { method: 'DELETE' });
  if (!response.ok) throw new Error('Failed to delete car');
  return response.json();
};

export const addToCart = async (id: number) => {
  const response = await fetch(`${API_BASE_URL}/cars/cart/${id}`, { method: 'POST' });
  if (!response.ok) throw new Error('Failed to add to cart');
  return response.json();
};

export const getCart = async () => {
  const response = await fetch(`${API_BASE_URL}/cars/cart`);
  if (!response.ok) throw new Error('Failed to fetch cart');
  return response.json();
};
