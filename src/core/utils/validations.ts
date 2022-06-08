import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'Match' })
class MatchConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    const relatedValue = (args.object as any)[relatedPropertyName];
    return value === relatedValue;
  }
  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${args.property} must match ${relatedPropertyName}`;
  }
}

export function Match(property: string, validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: MatchConstraint,
    });
  };
}

/**
 * VatID validate decorator, should pass invoice field type of current object
 * @param {string} invoiceTypeField - The name of the invoice type field.
 */

export function VatID(property: string, validationOptions?: ValidationOptions) {
  return (object: any, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: VatIDConstraint,
    });
  };
}

@ValidatorConstraint({ name: 'VatID' })
class VatIDConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [invoiceTypeField = 'invoiceType'] = args.constraints;
    const relatedValue = (args.object as any)[invoiceTypeField];
    return relatedValue === 'T' ? value?.length === 4 : value?.length === 5;
  }
  defaultMessage(args: ValidationArguments) {
    const [relatedPropertyName] = args.constraints;
    return `${args.property} must match with type of invoice ${relatedPropertyName}`;
  }
}
