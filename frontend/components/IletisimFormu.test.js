import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import IletisimFormu from "./IletisimFormu";
import App from "../App";
import { getByTestId } from "@testing-library/react";
//test-1
test("hata olmadan render ediliyor", () => {
  () => {
    render(<App />);
  };
});
//test-2

test("iletişim formu headerı render ediliyor", () => {
  render(<IletisimFormu />);
  const element = screen.getByText("İletişim Formu");
  expect(element).toBeInTheDocument();
});
//test-3

test("kullanıcı adını 5 karakterden az girdiğinde BİR hata mesajı render ediyor.", async () => {
  render(<IletisimFormu />);

  const element = screen.getByLabelText("Ad*");
  fireEvent.change(element, { target: { value: "Nurs" } });

  const errMessage = screen.getByTestId("error-name");
  expect(errMessage).toBeInTheDocument();
  expect(errMessage).toHaveTextContent("Hata: ad en az 5 karakter olmalıdır.");
});
//test-4 fireevent sadece click için 3 adet tohavetextcontent yap
test("kullanıcı inputları doldurmadığında ÜÇ hata mesajı render ediliyor.", async () => {});

//test-5 click ve isim ve soyisim içine bak fireeventle
test("kullanıcı doğru ad ve soyad girdiğinde ama email girmediğinde BİR hata mesajı render ediliyor.", async () => {});

//test-6
test('geçersiz bir mail girildiğinde "email geçerli bir email adresi olmalıdır." hata mesajı render ediliyor', async () => {
  render(<IletisimFormu />);
  const email = screen.getByLabelText("Email*");
  fireEvent.change(email, { target: { value: "Nurrkaragozail.com" } });

  const element = screen.getByTestId("error-email");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(
    "Hata: email geçerli bir email adresi olmalıdır."
  );
});

//test-7
test('soyad girilmeden gönderilirse "soyad gereklidir." mesajı render ediliyor', async () => {
  render(<IletisimFormu />);

  const lastname = screen.getByLabelText("Soyad*");
  fireEvent.change(lastname, { target: { value: "" } });
  fireEvent.click(screen.getByText("Gönder"));

  const element = screen.getByTestId("error-1");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hata: soyad gereklidir.");
});

//test-8
test("ad,soyad, email render ediliyor. mesaj bölümü doldurulmadığında hata mesajı render edilmiyor.", async () => {});

//test-9
test("form gönderildiğinde girilen tüm değerler render ediliyor.", async () => {});
