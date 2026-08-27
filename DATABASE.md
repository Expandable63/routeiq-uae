# RouteIQ UAE Database Design

## Overview

RouteIQ UAE is a customer route planning and field sales management application designed for sales teams operating across the UAE.

---

# Customer Master

| Field Name | Data Type | Required |
|------------|-----------|-----------|
| Customer ID | Number | Yes |
| Company Name | Text | Yes |
| Contact Person | Text | Yes |
| Mobile Number | Text | Yes |
| Email Address | Text | No |
| Address | Text | Yes |
| Area | Text | Yes |
| City | Text | Yes |
| Latitude | Decimal | Yes |
| Longitude | Decimal | Yes |
| Assigned Account Manager | Text | No |
| Customer Status | Active / Prospect | Yes |

---

# Customer Visits

| Field Name | Data Type |
|------------|-----------|
| Visit ID | Number |
| Customer ID | Number |
| Visit Date | Date |
| Meeting Notes | Long Text |
| Action Items | Long Text |
| Follow-up Date | Date |
| Salesperson | Text |

---

# Route Planning

| Field Name | Data Type |
|------------|-----------|
| Route ID | Number |
| Route Name | Text |
| Route Date | Date |
| Starting Location | Text |
| Customers Included | Text |
| Estimated Distance | Number |
| Estimated Travel Time | Number |
| Route Status | Planned / Completed |

---

# Future Features

## Phase 1
- Customer List
- Customer Search
- UAE Map
- Customer Pins
- Customer Details

## Phase 2
- Nearby Customers
- Smart Route Planning
- Google Maps Navigation

## Phase 3
- Visit Tracking
- Opportunity Management
- Team Dashboards

---

# RouteIQ Vision

Help sales teams in UAE:

- Find nearby customers
- Plan daily visits
- Reduce travel time
- Increase customer meetings
- Improve territory coverage
