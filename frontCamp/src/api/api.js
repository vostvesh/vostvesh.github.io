import { sendRequest } from './request';
import ErrorHandler from './error-handler';

const BASE_URL = 'https://newsapi.org/';
const API_KEY = process.env.API_KEY || 'fd19765c1838482c8abdcdd84f9b24e3';
const ENDPOINTS = {
  SOURCES: 'v1/sources/',
  ARTICLES: (source) => `v1/articles?source=${source}&apiKey=${API_KEY}`,
};

const getAllSources = async () => {
  const response = await sendRequest(`${BASE_URL}${ENDPOINTS.SOURCES}`);
  ErrorHandler.handleStatusOk(response);
  ErrorHandler.handleSources(response);
  return response.sources;
};

const getArticles = async (source) => {
  const response = await sendRequest(`${BASE_URL}${ENDPOINTS.ARTICLES(source)}`);
  ErrorHandler.handleStatusOk(response);
  ErrorHandler.handleArticles(response);
  return response.articles;
};

export default {
  getAllSources,
  getArticles
};
