// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import com.google.gson.Gson;
import java.io.IOException;
import java.util.ArrayList;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/quotation")
public final class GetQuotation extends HttpServlet {

  private ArrayList<String> quotations = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
   
   quotations.add("Doubt is the key to knowledge.");
   quotations.add("Sow nothing, reap nothing.");
   quotations.add("Variety is the spice of life.");
   quotations.add("There is no royal road to learning.");
   quotations.add("The greatest test of courage on earth is to bear defeat without losing heart.");
   quotations.add("It is always morning somewhere in the world.");
   quotations.add("The world is like a mirror: Frown at itand it frowns at you; smile, and it smiles too.");

    // Convert the quotations to JSON
    Gson gson = new Gson();
    String json = gson.toJson(quotations);

    // Send the JSON as the response
    response.setContentType("text/html;");
    response.getWriter().println(json);
  }
}