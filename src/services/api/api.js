export const apiGet = async (endpoint) => {
  const res = await fetch(endpoint);
  if (res.status !== 200) return null;
  return res.json();
};

export const apiPost = async (endpoint, data, headers) => {
  const body = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };
  const res = await fetch(endpoint, body);
  if (res.status !== 201 || res.status !== 200) return null;
  return res.json();
};
