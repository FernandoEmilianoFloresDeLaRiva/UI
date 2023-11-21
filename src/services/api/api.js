export const apiGet = async (endpoint) => {
  const res = await fetch(endpoint);
  if (res.status !== 200) return null;
  return res.json();
};

export const apiGetWithAuth = async (endpoint, headers) => {
  const res = await fetch(endpoint, { headers });
  if (res.status !== 200) return null;
  return res.json();
};

export const apiGetImg = async (endpoint, headers) => {
  const res = await fetch(endpoint, { headers });
  if (res.status === 401) return 401;
  if (res.status !== 200) return null;
  return res;
};

export const apiLogin = async (endpoint, data, headers) => {
  const body = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };
  const res = await fetch(endpoint, body);
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
  if (res.status !== 201) return res.status;
  return res.json();
};

export const apiPatch = async (endpoint, data) => {
  const res = await fetch(endpoint, data);
  if (res.status !== 200) return res.status;
  return res.json();
};

export const apiDelete = async (endpoint, data) => {
  const res = await fetch(endpoint, data);
  if (res.status !== 200) return res.status;
  return res.json();
};
