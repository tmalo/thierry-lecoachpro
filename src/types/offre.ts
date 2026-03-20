import { LucideIcon } from "lucide-react";

export interface Faq {
  question: string;
  answer: string;
}

export interface Offre {
  sku: string;
  legacy?: boolean;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  douleurs: string[];
  benefices: string[];
  modalites: string[];
  faq?: Faq[];
}

export interface OffreDisplayed extends Offre {
  slug: string;
  hasDetailPage: boolean;
  featured: boolean;
  collapsed: boolean;
}

 
{
  "$ref": "#/definitions/OffreDisplayed",
  "definitions": {
    "OffreDisplayed": {
      "type": "object",
      "properties": {
        "sku": {
          "type": "string"
        },
        "legacy": {
          "type": "boolean"
        },
        "title": {
          "type": "string"
        },
        "subtitle": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "audience": {
          "type": "string"
        },
        "douleurs": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "benefices": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "modalites": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "faq": {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "question": {
                "type": "string"
              },
              "answer": {
                "type": "string"
              },
              "slug": {
                "type": "string"
              },
              "hasDetailPage": {
                "type": "boolean"
              },
              "featured": {
                "type": "boolean"
              },
              "collapsed": {
                "type": "boolean"
              }
            },
            "required": [
              "question",
              "answer",
              "slug",
              "hasDetailPage",
              "featured",
              "collapsed"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [
        "sku",
        "title",
        "subtitle",
        "description",
        "audience",
        "douleurs",
        "benefices",
        "modalites"
      ],
      "additionalProperties": false
    }
  },
  "$schema": "http://json-schema.org/draft-07/schema#"
}
 */