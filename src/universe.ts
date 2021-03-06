var Universes={
  "Universe08": {
    "GlobalSchema": {
      "name": "GlobalSchema",
      "properties": {
        "key": {
          "name": "key"
        },
        "value": {
          "name": "value"
        }
      }
    },
    "Api": {
      "name": "Api",
      "properties": {
        "title": {
          "name": "title"
        },
        "version": {
          "name": "version"
        },
        "baseUri": {
          "name": "baseUri"
        },
        "baseUriParameters": {
          "name": "baseUriParameters"
        },
        "uriParameters": {
          "name": "uriParameters"
        },
        "protocols": {
          "name": "protocols"
        },
        "mediaType": {
          "name": "mediaType"
        },
        "schemas": {
          "name": "schemas"
        },
        "traits": {
          "name": "traits"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "securitySchemes": {
          "name": "securitySchemes"
        },
        "resourceTypes": {
          "name": "resourceTypes"
        },
        "resources": {
          "name": "resources"
        },
        "documentation": {
          "name": "documentation"
        },
        "RAMLVersion": {
          "name": "RAMLVersion"
        }
      }
    },
    "DocumentationItem": {
      "name": "DocumentationItem",
      "properties": {
        "title": {
          "name": "title"
        },
        "content": {
          "name": "content"
        }
      }
    },
    "ValueType": {
      "name": "ValueType",
      "properties": {}
    },
    "StringType": {
      "name": "StringType",
      "properties": {}
    },
    "AnyType": {
      "name": "AnyType",
      "properties": {}
    },
    "NumberType": {
      "name": "NumberType",
      "properties": {}
    },
    "BooleanType": {
      "name": "BooleanType",
      "properties": {}
    },
    "Referencable": {
      "name": "Referencable",
      "properties": {}
    },
    "Reference": {
      "name": "Reference",
      "properties": {
        "structuredValue": {
          "name": "structuredValue"
        },
        "name": {
          "name": "name"
        }
      }
    },
    "DeclaresDynamicType": {
      "name": "DeclaresDynamicType",
      "properties": {}
    },
    "UriTemplate": {
      "name": "UriTemplate",
      "properties": {}
    },
    "RelativeUriString": {
      "name": "RelativeUriString",
      "properties": {}
    },
    "FullUriTemplateString": {
      "name": "FullUriTemplateString",
      "properties": {}
    },
    "FixedUri": {
      "name": "FixedUri",
      "properties": {}
    },
    "MarkdownString": {
      "name": "MarkdownString",
      "properties": {}
    },
    "SchemaString": {
      "name": "SchemaString",
      "properties": {}
    },
    "JSonSchemaString": {
      "name": "JSonSchemaString",
      "properties": {}
    },
    "XMLSchemaString": {
      "name": "XMLSchemaString",
      "properties": {}
    },
    "ExampleString": {
      "name": "ExampleString",
      "properties": {}
    },
    "StatusCodeString": {
      "name": "StatusCodeString",
      "properties": {}
    },
    "JSONExample": {
      "name": "JSONExample",
      "properties": {}
    },
    "XMLExample": {
      "name": "XMLExample",
      "properties": {}
    },
    "TypeInstance": {
      "name": "TypeInstance",
      "properties": {
        "properties": {
          "name": "properties"
        },
        "isScalar": {
          "name": "isScalar"
        },
        "value": {
          "name": "value"
        }
      }
    },
    "TypeInstanceProperty": {
      "name": "TypeInstanceProperty",
      "properties": {
        "name": {
          "name": "name"
        },
        "value": {
          "name": "value"
        },
        "values": {
          "name": "values"
        },
        "isArray": {
          "name": "isArray"
        }
      }
    },
    "RAMLLanguageElement": {
      "name": "RAMLLanguageElement",
      "properties": {
        "description": {
          "name": "description"
        }
      }
    },
    "RAMLSimpleElement": {
      "name": "RAMLSimpleElement",
      "properties": {}
    },
    "ResourceTypeRef": {
      "name": "ResourceTypeRef",
      "properties": {
        "resourceType": {
          "name": "resourceType"
        }
      }
    },
    "TraitRef": {
      "name": "TraitRef",
      "properties": {
        "trait": {
          "name": "trait"
        }
      }
    },
    "MethodBase": {
      "name": "MethodBase",
      "properties": {
        "responses": {
          "name": "responses"
        },
        "body": {
          "name": "body"
        },
        "protocols": {
          "name": "protocols"
        },
        "securedBy": {
          "name": "securedBy"
        }
      }
    },
    "Trait": {
      "name": "Trait",
      "properties": {
        "name": {
          "name": "name"
        },
        "usage": {
          "name": "usage"
        },
        "parametrizedProperties": {
          "name": "parametrizedProperties"
        }
      }
    },
    "ResourceType": {
      "name": "ResourceType",
      "properties": {
        "name": {
          "name": "name"
        },
        "usage": {
          "name": "usage"
        },
        "methods": {
          "name": "methods"
        },
        "is": {
          "name": "is"
        },
        "type": {
          "name": "type"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "uriParameters": {
          "name": "uriParameters"
        },
        "displayName": {
          "name": "displayName"
        },
        "baseUriParameters": {
          "name": "baseUriParameters"
        },
        "parametrizedProperties": {
          "name": "parametrizedProperties"
        }
      }
    },
    "Method": {
      "name": "Method",
      "properties": {
        "method": {
          "name": "method"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "is": {
          "name": "is"
        }
      }
    },
    "Resource": {
      "name": "Resource",
      "properties": {
        "relativeUri": {
          "name": "relativeUri"
        },
        "type": {
          "name": "type"
        },
        "is": {
          "name": "is"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "uriParameters": {
          "name": "uriParameters"
        },
        "methods": {
          "name": "methods"
        },
        "resources": {
          "name": "resources"
        },
        "displayName": {
          "name": "displayName"
        },
        "baseUriParameters": {
          "name": "baseUriParameters"
        }
      }
    },
    "SecuritySchemePart": {
      "name": "SecuritySchemePart",
      "properties": {
        "headers": {
          "name": "headers"
        },
        "queryParameters": {
          "name": "queryParameters"
        },
        "responses": {
          "name": "responses"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        }
      }
    },
    "SecuritySchemeSettings": {
      "name": "SecuritySchemeSettings",
      "properties": {}
    },
    "AbstractSecurityScheme": {
      "name": "AbstractSecurityScheme",
      "properties": {
        "name": {
          "name": "name"
        },
        "type": {
          "name": "type"
        },
        "description": {
          "name": "description"
        },
        "describedBy": {
          "name": "describedBy"
        },
        "settings": {
          "name": "settings"
        }
      }
    },
    "SecuritySchemeRef": {
      "name": "SecuritySchemeRef",
      "properties": {
        "securitySchemeName": {
          "name": "securitySchemeName"
        },
        "securityScheme": {
          "name": "securityScheme"
        }
      }
    },
    "OAuth1SecuritySchemeSettings": {
      "name": "OAuth1SecuritySchemeSettings",
      "properties": {
        "requestTokenUri": {
          "name": "requestTokenUri"
        },
        "authorizationUri": {
          "name": "authorizationUri"
        },
        "tokenCredentialsUri": {
          "name": "tokenCredentialsUri"
        }
      }
    },
    "OAuth2SecuritySchemeSettings": {
      "name": "OAuth2SecuritySchemeSettings",
      "properties": {
        "accessTokenUri": {
          "name": "accessTokenUri"
        },
        "authorizationUri": {
          "name": "authorizationUri"
        },
        "authorizationGrants": {
          "name": "authorizationGrants"
        },
        "scopes": {
          "name": "scopes"
        }
      }
    },
    "OAuth2SecurityScheme": {
      "name": "OAuth2SecurityScheme",
      "properties": {
        "settings": {
          "name": "settings"
        }
      }
    },
    "OAuth1SecurityScheme": {
      "name": "OAuth1SecurityScheme",
      "properties": {
        "settings": {
          "name": "settings"
        }
      }
    },
    "BasicSecurityScheme": {
      "name": "BasicSecurityScheme",
      "properties": {}
    },
    "DigestSecurityScheme": {
      "name": "DigestSecurityScheme",
      "properties": {}
    },
    "CustomSecurityScheme": {
      "name": "CustomSecurityScheme",
      "properties": {}
    },
    "Parameter": {
      "name": "Parameter",
      "properties": {
        "name": {
          "name": "name"
        },
        "displayName": {
          "name": "displayName"
        },
        "type": {
          "name": "type"
        },
        "location": {
          "name": "location"
        },
        "required": {
          "name": "required"
        },
        "default": {
          "name": "default"
        },
        "example": {
          "name": "example"
        },
        "repeat": {
          "name": "repeat"
        }
      }
    },
    "StringTypeDeclaration": {
      "name": "StringTypeDeclaration",
      "properties": {
        "pattern": {
          "name": "pattern"
        },
        "enum": {
          "name": "enum"
        },
        "minLength": {
          "name": "minLength"
        },
        "maxLength": {
          "name": "maxLength"
        }
      }
    },
    "BooleanTypeDeclaration": {
      "name": "BooleanTypeDeclaration",
      "properties": {}
    },
    "NumberTypeDeclaration": {
      "name": "NumberTypeDeclaration",
      "properties": {
        "minimum": {
          "name": "minimum"
        },
        "maximum": {
          "name": "maximum"
        }
      }
    },
    "IntegerTypeDeclaration": {
      "name": "IntegerTypeDeclaration",
      "properties": {}
    },
    "DateTypeDeclaration": {
      "name": "DateTypeDeclaration",
      "properties": {}
    },
    "FileTypeDeclaration": {
      "name": "FileTypeDeclaration",
      "properties": {}
    },
    "HasNormalParameters": {
      "name": "HasNormalParameters",
      "properties": {
        "queryParameters": {
          "name": "queryParameters"
        },
        "displayName": {
          "name": "displayName"
        },
        "headers": {
          "name": "headers"
        }
      }
    },
    "ParameterLocation": {
      "name": "ParameterLocation",
      "properties": {}
    },
    "MimeTypeModel": {
      "name": "MimeTypeModel",
      "properties": {
        "type": {
          "name": "type"
        },
        "tree": {
          "name": "tree"
        },
        "subtype": {
          "name": "subtype"
        },
        "suffix": {
          "name": "suffix"
        },
        "parameters": {
          "name": "parameters"
        }
      }
    },
    "MimeType": {
      "name": "MimeType",
      "properties": {}
    },
    "BodyLike": {
      "name": "BodyLike",
      "properties": {
        "name": {
          "name": "name"
        },
        "schema": {
          "name": "schema"
        },
        "example": {
          "name": "example"
        },
        "formParameters": {
          "name": "formParameters"
        },
        "schemaContent": {
          "name": "schemaContent"
        }
      }
    },
    "XMLBody": {
      "name": "XMLBody",
      "properties": {
        "schema": {
          "name": "schema"
        }
      }
    },
    "JSONBody": {
      "name": "JSONBody",
      "properties": {
        "schema": {
          "name": "schema"
        }
      }
    },
    "Response": {
      "name": "Response",
      "properties": {
        "code": {
          "name": "code"
        },
        "headers": {
          "name": "headers"
        },
        "body": {
          "name": "body"
        }
      }
    }
  },
  "Universe10": {
    "GlobalSchema": {
      "name": "GlobalSchema",
      "properties": {
        "key": {
          "name": "key"
        },
        "value": {
          "name": "value"
        }
      }
    },
    "ImportDeclaration": {
      "name": "ImportDeclaration",
      "properties": {
        "key": {
          "name": "key"
        },
        "value": {
          "name": "value"
        }
      }
    },
    "Library": {
      "name": "Library",
      "properties": {
        "usage": {
          "name": "usage"
        },
        "name": {
          "name": "name"
        }
      }
    },
    "LibraryBase": {
      "name": "LibraryBase",
      "properties": {
        "schemas": {
          "name": "schemas"
        },
        "types": {
          "name": "types"
        },
        "traits": {
          "name": "traits"
        },
        "resourceTypes": {
          "name": "resourceTypes"
        },
        "annotationTypes": {
          "name": "annotationTypes"
        },
        "securitySchemes": {
          "name": "securitySchemes"
        },
        "uses": {
          "name": "uses"
        }
      }
    },
    "Overlay": {
      "name": "Overlay",
      "properties": {
        "usage": {
          "name": "usage"
        },
        "masterRef": {
          "name": "masterRef"
        },
        "title": {
          "name": "title"
        }
      }
    },
    "Extension": {
      "name": "Extension",
      "properties": {
        "usage": {
          "name": "usage"
        },
        "masterRef": {
          "name": "masterRef"
        },
        "title": {
          "name": "title"
        }
      }
    },
    "Api": {
      "name": "Api",
      "properties": {
        "title": {
          "name": "title"
        },
        "version": {
          "name": "version"
        },
        "baseUri": {
          "name": "baseUri"
        },
        "baseUriParameters": {
          "name": "baseUriParameters"
        },
        "protocols": {
          "name": "protocols"
        },
        "mediaType": {
          "name": "mediaType"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "resources": {
          "name": "resources"
        },
        "documentation": {
          "name": "documentation"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        },
        "RAMLVersion": {
          "name": "RAMLVersion"
        }
      }
    },
    "DocumentationItem": {
      "name": "DocumentationItem",
      "properties": {
        "title": {
          "name": "title"
        },
        "content": {
          "name": "content"
        }
      }
    },
    "ValueType": {
      "name": "ValueType",
      "properties": {}
    },
    "StringType": {
      "name": "StringType",
      "properties": {}
    },
    "AnyType": {
      "name": "AnyType",
      "properties": {}
    },
    "NumberType": {
      "name": "NumberType",
      "properties": {}
    },
    "BooleanType": {
      "name": "BooleanType",
      "properties": {}
    },
    "Referencable": {
      "name": "Referencable",
      "properties": {}
    },
    "Reference": {
      "name": "Reference",
      "properties": {
        "structuredValue": {
          "name": "structuredValue"
        },
        "name": {
          "name": "name"
        }
      }
    },
    "DeclaresDynamicType": {
      "name": "DeclaresDynamicType",
      "properties": {}
    },
    "UriTemplate": {
      "name": "UriTemplate",
      "properties": {}
    },
    "StatusCodeString": {
      "name": "StatusCodeString",
      "properties": {}
    },
    "RelativeUriString": {
      "name": "RelativeUriString",
      "properties": {}
    },
    "FullUriTemplateString": {
      "name": "FullUriTemplateString",
      "properties": {}
    },
    "FixedUriString": {
      "name": "FixedUriString",
      "properties": {}
    },
    "ContentType": {
      "name": "ContentType",
      "properties": {}
    },
    "ValidityExpression": {
      "name": "ValidityExpression",
      "properties": {}
    },
    "MarkdownString": {
      "name": "MarkdownString",
      "properties": {}
    },
    "DateFormatSpec": {
      "name": "DateFormatSpec",
      "properties": {}
    },
    "FunctionalInterface": {
      "name": "FunctionalInterface",
      "properties": {}
    },
    "SchemaString": {
      "name": "SchemaString",
      "properties": {}
    },
    "ExampleString": {
      "name": "ExampleString",
      "properties": {}
    },
    "JSonSchemaString": {
      "name": "JSonSchemaString",
      "properties": {}
    },
    "XMLSchemaString": {
      "name": "XMLSchemaString",
      "properties": {}
    },
    "RAMLSelector": {
      "name": "RAMLSelector",
      "properties": {}
    },
    "ExampleSpec": {
      "name": "ExampleSpec",
      "properties": {
        "content": {
          "name": "content"
        },
        "strict": {
          "name": "strict"
        },
        "name": {
          "name": "name"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        },
        "structuredContent": {
          "name": "structuredContent"
        }
      }
    },
    "DataElementProperty": {
      "name": "DataElementProperty",
      "properties": {
        "name": {
          "name": "name"
        },
        "location": {
          "name": "location"
        },
        "locationKind": {
          "name": "locationKind"
        },
        "default": {
          "name": "default"
        },
        "required": {
          "name": "required"
        }
      }
    },
    "TypeDeclaration": {
      "name": "TypeDeclaration",
      "properties": {
        "name": {
          "name": "name"
        },
        "facets": {
          "name": "facets"
        },
        "schema": {
          "name": "schema"
        },
        "type": {
          "name": "type"
        },
        "location": {
          "name": "location"
        },
        "locationKind": {
          "name": "locationKind"
        },
        "default": {
          "name": "default"
        },
        "example": {
          "name": "example"
        },
        "examples": {
          "name": "examples"
        },
        "repeat": {
          "name": "repeat"
        },
        "required": {
          "name": "required"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        },
        "fixedFacets": {
          "name": "fixedFacets"
        },
        "schemaContent": {
          "name": "schemaContent"
        },
        "structuredExample": {
          "name": "structuredExample"
        }
      }
    },
    "ScalarElement": {
      "name": "ScalarElement",
      "properties": {
        "facets": {
          "name": "facets"
        },
        "enum": {
          "name": "enum"
        }
      }
    },
    "ArrayTypeDeclaration": {
      "name": "ArrayTypeDeclaration",
      "properties": {
        "uniqueItems": {
          "name": "uniqueItems"
        },
        "items": {
          "name": "items"
        },
        "minItems": {
          "name": "minItems"
        },
        "maxItems": {
          "name": "maxItems"
        }
      }
    },
    "UnionTypeDeclaration": {
      "name": "UnionTypeDeclaration",
      "properties": {
        "discriminator": {
          "name": "discriminator"
        }
      }
    },
    "ObjectTypeDeclaration": {
      "name": "ObjectTypeDeclaration",
      "properties": {
        "properties": {
          "name": "properties"
        },
        "minProperties": {
          "name": "minProperties"
        },
        "maxProperties": {
          "name": "maxProperties"
        },
        "additionalProperties": {
          "name": "additionalProperties"
        },
        "patternProperties": {
          "name": "patternProperties"
        },
        "discriminator": {
          "name": "discriminator"
        },
        "discriminatorValue": {
          "name": "discriminatorValue"
        }
      }
    },
    "StringTypeDeclaration": {
      "name": "StringTypeDeclaration",
      "properties": {
        "pattern": {
          "name": "pattern"
        },
        "minLength": {
          "name": "minLength"
        },
        "maxLength": {
          "name": "maxLength"
        },
        "enum": {
          "name": "enum"
        }
      }
    },
    "BooleanTypeDeclaration": {
      "name": "BooleanTypeDeclaration",
      "properties": {}
    },
    "ValueTypeDeclaration": {
      "name": "ValueTypeDeclaration",
      "properties": {}
    },
    "NumberTypeDeclaration": {
      "name": "NumberTypeDeclaration",
      "properties": {
        "minimum": {
          "name": "minimum"
        },
        "maximum": {
          "name": "maximum"
        },
        "enum": {
          "name": "enum"
        },
        "format": {
          "name": "format"
        },
        "multipleOf": {
          "name": "multipleOf"
        }
      }
    },
    "IntegerTypeDeclaration": {
      "name": "IntegerTypeDeclaration",
      "properties": {
        "format": {
          "name": "format"
        }
      }
    },
    "RAMLExpression": {
      "name": "RAMLExpression",
      "properties": {}
    },
    "SchemaElement": {
      "name": "SchemaElement",
      "properties": {}
    },
    "DateTypeDeclaration": {
      "name": "DateTypeDeclaration",
      "properties": {
        "dateFormat": {
          "name": "dateFormat"
        }
      }
    },
    "TypeInstance": {
      "name": "TypeInstance",
      "properties": {
        "properties": {
          "name": "properties"
        },
        "isScalar": {
          "name": "isScalar"
        },
        "value": {
          "name": "value"
        }
      }
    },
    "TypeInstanceProperty": {
      "name": "TypeInstanceProperty",
      "properties": {
        "name": {
          "name": "name"
        },
        "value": {
          "name": "value"
        },
        "values": {
          "name": "values"
        },
        "isArray": {
          "name": "isArray"
        }
      }
    },
    "ModelLocation": {
      "name": "ModelLocation",
      "properties": {}
    },
    "LocationKind": {
      "name": "LocationKind",
      "properties": {}
    },
    "MimeTypeModel": {
      "name": "MimeTypeModel",
      "properties": {
        "type": {
          "name": "type"
        },
        "tree": {
          "name": "tree"
        },
        "subtype": {
          "name": "subtype"
        },
        "suffix": {
          "name": "suffix"
        },
        "parameters": {
          "name": "parameters"
        }
      }
    },
    "MimeType": {
      "name": "MimeType",
      "properties": {}
    },
    "Response": {
      "name": "Response",
      "properties": {
        "code": {
          "name": "code"
        },
        "headers": {
          "name": "headers"
        },
        "body": {
          "name": "body"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        }
      }
    },
    "RAMLLanguageElement": {
      "name": "RAMLLanguageElement",
      "properties": {
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        }
      }
    },
    "RAMLSimpleElement": {
      "name": "RAMLSimpleElement",
      "properties": {}
    },
    "AnnotationTypeDeclaration": {
      "name": "AnnotationTypeDeclaration",
      "properties": {
        "allowMultiple": {
          "name": "allowMultiple"
        },
        "allowedTargets": {
          "name": "allowedTargets"
        },
        "usage": {
          "name": "usage"
        }
      }
    },
    "AnnotationRef": {
      "name": "AnnotationRef",
      "properties": {
        "annotation": {
          "name": "annotation"
        }
      }
    },
    "AnnotationTarget": {
      "name": "AnnotationTarget",
      "properties": {}
    },
    "Annotation": {
      "name": "Annotation",
      "properties": {
        "name": {
          "name": "name"
        }
      }
    },
    "ArrayAnnotationTypeDeclaration": {
      "name": "ArrayAnnotationTypeDeclaration",
      "properties": {}
    },
    "UnionAnnotationTypeDeclaration": {
      "name": "UnionAnnotationTypeDeclaration",
      "properties": {}
    },
    "ObjectAnnotationTypeDeclaration": {
      "name": "ObjectAnnotationTypeDeclaration",
      "properties": {}
    },
    "StringAnnotationTypeDeclaration": {
      "name": "StringAnnotationTypeDeclaration",
      "properties": {}
    },
    "BooleanAnnotationTypeDeclaration": {
      "name": "BooleanAnnotationTypeDeclaration",
      "properties": {}
    },
    "ValueAnnotationTypeDeclaration": {
      "name": "ValueAnnotationTypeDeclaration",
      "properties": {}
    },
    "NumberAnnotationTypeDeclaration": {
      "name": "NumberAnnotationTypeDeclaration",
      "properties": {}
    },
    "RAMLExpressionAnnotation": {
      "name": "RAMLExpressionAnnotation",
      "properties": {}
    },
    "DateTypeAnnotationDeclaration": {
      "name": "DateTypeAnnotationDeclaration",
      "properties": {}
    },
    "ResourceTypeRef": {
      "name": "ResourceTypeRef",
      "properties": {
        "resourceType": {
          "name": "resourceType"
        }
      }
    },
    "TraitRef": {
      "name": "TraitRef",
      "properties": {
        "trait": {
          "name": "trait"
        }
      }
    },
    "SecuritySchemePart": {
      "name": "SecuritySchemePart",
      "properties": {
        "headers": {
          "name": "headers"
        },
        "queryParameters": {
          "name": "queryParameters"
        },
        "queryString": {
          "name": "queryString"
        },
        "responses": {
          "name": "responses"
        },
        "is": {
          "name": "is"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        }
      }
    },
    "SecuritySchemeSettings": {
      "name": "SecuritySchemeSettings",
      "properties": {}
    },
    "OAuth1SecuritySchemeSettings": {
      "name": "OAuth1SecuritySchemeSettings",
      "properties": {
        "requestTokenUri": {
          "name": "requestTokenUri"
        },
        "authorizationUri": {
          "name": "authorizationUri"
        },
        "tokenCredentialsUri": {
          "name": "tokenCredentialsUri"
        },
        "signatures": {
          "name": "signatures"
        }
      }
    },
    "OAuth2SecuritySchemeSettings": {
      "name": "OAuth2SecuritySchemeSettings",
      "properties": {
        "accessTokenUri": {
          "name": "accessTokenUri"
        },
        "authorizationUri": {
          "name": "authorizationUri"
        },
        "authorizationGrants": {
          "name": "authorizationGrants"
        },
        "scopes": {
          "name": "scopes"
        }
      }
    },
    "PassThroughSecuritySchemeSettings": {
      "name": "PassThroughSecuritySchemeSettings",
      "properties": {
        "queryParameterName": {
          "name": "queryParameterName"
        },
        "headerName": {
          "name": "headerName"
        }
      }
    },
    "SecuritySchemeRef": {
      "name": "SecuritySchemeRef",
      "properties": {
        "securitySchemeName": {
          "name": "securitySchemeName"
        },
        "securityScheme": {
          "name": "securityScheme"
        }
      }
    },
    "AbstractSecurityScheme": {
      "name": "AbstractSecurityScheme",
      "properties": {
        "name": {
          "name": "name"
        },
        "type": {
          "name": "type"
        },
        "description": {
          "name": "description"
        },
        "describedBy": {
          "name": "describedBy"
        },
        "settings": {
          "name": "settings"
        }
      }
    },
    "OAuth2SecurityScheme": {
      "name": "OAuth2SecurityScheme",
      "properties": {
        "settings": {
          "name": "settings"
        }
      }
    },
    "OAuth1SecurityScheme": {
      "name": "OAuth1SecurityScheme",
      "properties": {
        "settings": {
          "name": "settings"
        }
      }
    },
    "PassThroughSecurityScheme": {
      "name": "PassThroughSecurityScheme",
      "properties": {
        "settings": {
          "name": "settings"
        }
      }
    },
    "BasicSecurityScheme": {
      "name": "BasicSecurityScheme",
      "properties": {}
    },
    "DigestSecurityScheme": {
      "name": "DigestSecurityScheme",
      "properties": {}
    },
    "CustomSecurityScheme": {
      "name": "CustomSecurityScheme",
      "properties": {}
    },
    "MethodBase": {
      "name": "MethodBase",
      "properties": {
        "responses": {
          "name": "responses"
        },
        "body": {
          "name": "body"
        },
        "protocols": {
          "name": "protocols"
        },
        "is": {
          "name": "is"
        },
        "securedBy": {
          "name": "securedBy"
        }
      }
    },
    "Trait": {
      "name": "Trait",
      "properties": {
        "name": {
          "name": "name"
        },
        "usage": {
          "name": "usage"
        },
        "uses": {
          "name": "uses"
        },
        "parametrizedProperties": {
          "name": "parametrizedProperties"
        }
      }
    },
    "ResourceBase": {
      "name": "ResourceBase",
      "properties": {
        "methods": {
          "name": "methods"
        },
        "is": {
          "name": "is"
        },
        "type": {
          "name": "type"
        },
        "securedBy": {
          "name": "securedBy"
        },
        "uriParameters": {
          "name": "uriParameters"
        }
      }
    },
    "ResourceType": {
      "name": "ResourceType",
      "properties": {
        "name": {
          "name": "name"
        },
        "usage": {
          "name": "usage"
        },
        "uses": {
          "name": "uses"
        },
        "parametrizedProperties": {
          "name": "parametrizedProperties"
        }
      }
    },
    "ResourceTypeOrTrait": {
      "name": "ResourceTypeOrTrait",
      "properties": {
        "usage": {
          "name": "usage"
        },
        "uses": {
          "name": "uses"
        },
        "parameters": {
          "name": "parameters"
        }
      }
    },
    "Method": {
      "name": "Method",
      "properties": {
        "method": {
          "name": "method"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "queryString": {
          "name": "queryString"
        },
        "queryParameters": {
          "name": "queryParameters"
        },
        "headers": {
          "name": "headers"
        },
        "body": {
          "name": "body"
        },
        "is": {
          "name": "is"
        },
        "annotations": {
          "name": "annotations"
        },
        "securedBy": {
          "name": "securedBy"
        }
      }
    },
    "Resource": {
      "name": "Resource",
      "properties": {
        "relativeUri": {
          "name": "relativeUri"
        },
        "resources": {
          "name": "resources"
        },
        "displayName": {
          "name": "displayName"
        },
        "description": {
          "name": "description"
        },
        "annotations": {
          "name": "annotations"
        }
      }
    },
    "FileTypeDeclaration": {
      "name": "FileTypeDeclaration",
      "properties": {
        "fileTypes": {
          "name": "fileTypes"
        },
        "minLength": {
          "name": "minLength"
        },
        "maxLength": {
          "name": "maxLength"
        }
      }
    },
    "HasNormalParameters": {
      "name": "HasNormalParameters",
      "properties": {
        "queryParameters": {
          "name": "queryParameters"
        },
        "headers": {
          "name": "headers"
        },
        "queryString": {
          "name": "queryString"
        }
      }
    },
    "Status": {
      "name": "Status",
      "properties": {
        "code": {
          "name": "code"
        },
        "message": {
          "name": "message"
        }
      }
    },
    "AuthentificationState": {
      "name": "AuthentificationState",
      "properties": {}
    },
    "AuthentificationParameters": {
      "name": "AuthentificationParameters",
      "properties": {}
    },
    "AuthData": {
      "name": "AuthData",
      "properties": {
        "authentificationParameters": {
          "name": "authentificationParameters"
        }
      }
    },
    "ParameterSpec": {
      "name": "ParameterSpec",
      "properties": {}
    },
    "PromptSpec": {
      "name": "PromptSpec",
      "properties": {}
    },
    "UserResponse": {
      "name": "UserResponse",
      "properties": {}
    },
    "QueryListener": {
      "name": "QueryListener",
      "properties": {}
    },
    "EndPoint": {
      "name": "EndPoint",
      "properties": {}
    },
    "EndPointSpec": {
      "name": "EndPointSpec",
      "properties": {
        "url": {
          "name": "url"
        },
        "needToSendResponse": {
          "name": "needToSendResponse"
        }
      }
    },
    "SecurityEnvironment": {
      "name": "SecurityEnvironment",
      "properties": {}
    },
    "AuthentificationManager": {
      "name": "AuthentificationManager",
      "properties": {}
    },
    "SchemeInfo": {
      "name": "SchemeInfo",
      "properties": {
        "parameterSpec": {
          "name": "parameterSpec"
        }
      }
    },
    "SecurityScheme": {
      "name": "SecurityScheme",
      "properties": {}
    },
    "SecurityAwareApiClient": {
      "name": "SecurityAwareApiClient",
      "properties": {}
    },
    "SecuritySchemeHook": {
      "name": "SecuritySchemeHook",
      "properties": {}
    },
    "StatusCode": {
      "name": "StatusCode",
      "properties": {}
    }
  }
};export=Universes