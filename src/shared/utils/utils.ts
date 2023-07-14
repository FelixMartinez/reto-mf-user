export const endpoint = 'http://localhost:3000';

export interface IAPIErrors {
  [key: string]: string[];
}

export interface IBaseAPIReq {
  errors?: IAPIErrors;
}

export interface IStandardReq {
  path: string;
  method: 'GET' | 'PUT' | 'POST' | 'DELETE';
  body?: string;
}

export const standardReq = async ({
  path,
  method,
  body,
}: IStandardReq) => {
  const reqPath = `${endpoint}/${path}`;
  let headers: { [key: string]: string } = {
    'content-type': 'application/json',
  };

  try {
    const req = await fetch(reqPath, {
      credentials: 'omit',
      headers,
      method,
      body,
      mode: 'cors',
    });

    if (req.ok) {
      return await req.json();
    } else {
      const errors = req.status === 404 ? 'Not Found' : 'Server Error';
      return { errors };
    }
  } catch (errors) {
    console.error(errors);
    return { errors };
  }
};
