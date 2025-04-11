import axios from 'axios';

import { applyInterceptors } from './interceptors';

const baseServiceClient = axios.create({});

export const serviceClient = axios.create({
  ...baseServiceClient.defaults,
  baseURL: `https://TemplateApp.bongzniak.com/svc`,
});

applyInterceptors(serviceClient);
