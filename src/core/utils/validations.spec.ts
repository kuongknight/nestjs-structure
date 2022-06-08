import { IsNotEmpty, validate } from 'class-validator';
import { VatID } from './validations';

class Vdto {
  @IsNotEmpty()
  invoiceType: string;

  @IsNotEmpty()
  @VatID('invoiceType')
  vatID: string;
}

describe('Validations', () => {
  it('VatID is valid invoiceType T', async () => {
    const vdto = new Vdto();
    vdto.invoiceType = 'T';
    vdto.vatID = '1234';
    expect(await validate(vdto)).toHaveLength(0);
  });
  it('VatID is valid invoiceType F', async () => {
    const vdto = new Vdto();
    vdto.invoiceType = 'F';
    vdto.vatID = '12345';
    expect(await validate(vdto)).toHaveLength(0);
  });
  it('VatID is invalid invoiceType T', async () => {
    const vdto = new Vdto();
    vdto.invoiceType = 'T';
    vdto.vatID = '12345';
    expect(await validate(vdto)).toHaveLength(1);
  });
  it('VatID is invalid invoiceType F', async () => {
    const vdto = new Vdto();
    vdto.invoiceType = 'F';
    vdto.vatID = '1234';
    expect(await validate(vdto)).toHaveLength(1);
  });
});
