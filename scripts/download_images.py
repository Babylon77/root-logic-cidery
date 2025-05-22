import os
import requests
from bs4 import BeautifulSoup
import json
import re
from urllib.parse import urljoin

def download_image(url, filename):
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"Successfully downloaded {filename}")
    except Exception as e:
        print(f"Error downloading {url}: {str(e)}")

def download_zillow_images():
    # Zillow listing URL
    url = "https://www.zillow.com/homedetails/25-Clove-Rd-Wantage-NJ-07461/201853935_zpid/"
    
    try:
        # Get the page content
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        
        # Parse the page
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Find image URLs in the page
        # Note: This is a simplified version. Zillow's actual image URLs might be in a different format
        image_urls = []
        for img in soup.find_all('img'):
            src = img.get('src')
            if src and ('photo' in src.lower() or 'property' in src.lower()):
                image_urls.append(src)
        
        # Download images
        for i, img_url in enumerate(image_urls):
            filename = f"public/images/zillow_{i+1}.jpg"
            download_image(img_url, filename)
            
    except Exception as e:
        print(f"Error processing Zillow listing: {e}")

def download_equipment_images():
    # Equipment manufacturer websites that allow image downloads
    equipment_urls = {
        'belt_press': 'https://www.buchervaslin.com/wp-content/uploads/2020/03/HPX5i-1.jpg',
        'fermentation_tank': 'https://www.buchervaslin.com/wp-content/uploads/2020/03/Fermentation-tanks-1.jpg',
        'canning_line': 'https://www.buchervaslin.com/wp-content/uploads/2020/03/Canning-line-1.jpg'
    }
    
    for name, url in equipment_urls.items():
        filename = f"../public/images/{name}.jpg"
        download_image(url, filename)

def download_stock_images():
    # Using Pixabay API for royalty-free images
    api_key = "YOUR_PIXABAY_API_KEY"  # You'll need to replace this with a valid API key
    search_terms = [
        "apple orchard",
        "apple harvesting",
        "apple pressing",
        "cider fermentation",
        "cider aging",
        "cider canning"
    ]
    
    for term in search_terms:
        url = f"https://pixabay.com/api/?key={api_key}&q={term}&image_type=photo&per_page=1"
        try:
            response = requests.get(url)
            data = response.json()
            if data['hits']:
                image_url = data['hits'][0]['largeImageURL']
                filename = f"../public/images/{term.replace(' ', '_')}.jpg"
                download_image(image_url, filename)
        except Exception as e:
            print(f"Error searching for {term}: {str(e)}")

def main():
    # Create images directory if it doesn't exist
    os.makedirs("../public/images", exist_ok=True)
    
    # Download images from various sources
    download_zillow_images()
    download_equipment_images()
    download_stock_images()

if __name__ == "__main__":
    main() 