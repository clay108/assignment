import puppeteer from 'puppeteer';
import axios from 'axios';
import { countWordFrequency } from '../utils/wordFrequencyCounter.js';

export const analyzeUrl = async (req, res) => {
  const { url } = req.body;

  try {
    // Launch puppeteer to get the content of the page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    const pageContent = await page.evaluate(() => document.body.innerText); // Extract visible text
    
    await browser.close();

    // Count word frequencies using the utility function
    const frequencies = countWordFrequency(pageContent);

    res.status(200).json(frequencies );
  } catch (error) {
    console.error("Error in analyzeURL:", error);
    res.status(500).json({ error: 'Failed to analyze URL' });
  }
};
