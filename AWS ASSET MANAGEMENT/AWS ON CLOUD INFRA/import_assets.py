import boto3
import json

# Initialize DynamoDB connection
dynamodb = boto3.resource('dynamodb', region_name='ap-south-1')  # Change region if needed
table = dynamodb.Table('Assets')  # Change to your actual table name

# Load data from JSON file
with open('dynamodb-assets.json') as file:
    data = json.load(file)

# Insert each item into DynamoDB
for item in data:
    try:
        table.put_item(Item=item)
        print(f"✅ Inserted: {item['id']}")
    except Exception as e:
        print(f"❌ Failed to insert: {item['id']} — {e}")

print("🎉 Done importing data.")
