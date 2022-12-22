import { Flashsale } from './../flashsales/entities/flashsale.entity';
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class SendmailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendVerifiedEmail(email: string, token: string) {
    this.mailerService
      .sendMail({
        to: `${email}`, // list of receivers
        from: 'bot.sendmail@gmail.com', // sender address
        subject: 'Verify your email', // Subject line
        text: `Your OTP: ${token}`, // plaintext body
    
      });
  
   }
  async sendForgetPassword(email: string, token: string) {
    this.mailerService.sendMail({
        to: email, // list of receivers
        from: 'bot.sendmail@gmail.com', // sender address
        subject: 'Forget password', // Subject line
        text: `You want to reset your password. This is your OTP: ${token}.\nPlease don't share this code for anyone.`, // plaintext body
   
      });
 
    }
    async sendNotification(email: string, flashsale: Flashsale) {
      this.mailerService.sendMail({
          to: `${email}`, // list of receivers
          from: 'bot.sendmail@gmail.com', // sender address
          subject: 'Flashsale notification', // Subject line
          text: `Welcome to flashsale: ${flashsale.name}.\n This flashsale start from: ${flashsale.startSale} to ${flashsale.endSale} `,
       
        });
       
      
    }
  }
  