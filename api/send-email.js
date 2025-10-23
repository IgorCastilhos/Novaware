import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { firstName, lastName, company, email, phone, projectType, message } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !company || !email || !phone || !projectType || !message) {
      return res.status(400).json({
        error: 'Todos os campos são obrigatórios'
      });
    }

    // Send email using Resend
    // In test mode, Resend only allows sending to the account owner's email
    // Change this to your business email after verifying your domain
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'igorcastilhos2010@hotmail.com';

    const { data, error } = await resend.emails.send({
      from: 'Novaware Orçamentos <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `Novo Orçamento de ${firstName} ${lastName} - ${projectType} - ${company}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(to right, #123366, #1769aa, #45c8ff); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #123366; }
              .value { margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>📧 Nova Solicitação de Orçamento</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">👤 Nome Completo:</div>
                  <div class="value">${firstName} ${lastName}</div>
                </div>
                
                <div class="field">
                  <div class="label">🏢 Empresa:</div>
                  <div class="value">${company}</div>
                </div>
                
                <div class="field">
                  <div class="label">📧 E-mail:</div>
                  <div class="value">${email}</div>
                </div>
                
                <div class="field">
                  <div class="label">📱 Telefone:</div>
                  <div class="value">${phone}</div>
                </div>
                
                <div class="field">
                  <div class="label">🎯 Tipo de Projeto:</div>
                  <div class="value">${projectType}</div>
                </div>
                
                <div class="field">
                  <div class="label">💬 Mensagem:</div>
                  <div class="value">${message}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({
      success: true,
      messageId: data.id,
      message: 'E-mail enviado com sucesso!'
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({
      error: 'Erro ao enviar e-mail. Tente novamente.'
    });
  }
}

