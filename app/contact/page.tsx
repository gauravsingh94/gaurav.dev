"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Sacramento</CardTitle>
            <p className="text-sm text-muted-foreground">California, USA</p>
          </CardHeader>
          <CardContent>
            <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1636667261777!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Input
                    id="full-name"
                    placeholder="Full name"
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email address"
                    className="bg-muted"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Textarea
                  id="message"
                  placeholder="Your Message"
                  className="min-h-[150px] bg-muted"
                />
              </div>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
